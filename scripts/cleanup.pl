#!/usr/bin/perl

use strict;
use warnings;
use File::Basename;
use File::Spec;

# Loop through all mdx files in the current directory including sub directories
# All files are in the file name of \d\d-.*\.mdx or \d\d\d-.*\.mdx
# Store all prefix and file extension excluded name with relative paths in a hash
# Then go thru each file again, replace http or https://www.ntrand.com/<name> to relative path to the file

my %mdx_files;

# Get all mdx files in the current directory and sub directories
sub get_mdx_files {
    my $dir = shift;
    print "Processing $dir\n";
    my $dir_handle;
    opendir( $dir_handle, $dir ) or die "Can't open $dir: $!";
    while ( my $file = readdir($dir_handle) ) {
        next if ( $file =~ m/^\./ );
        if ( -d "$dir/$file" ) {
            get_mdx_files("$dir/$file");
        }
        else {
            print "Processing $dir/$file\n";
            if ( $file =~ m/((\d\d\d?)-)?(.*)\.mdx/ ) {
                my $prefix = $2;
                my $name   = $3;
                my $ext    = "mdx";
                $mdx_files{"$name"} = "$dir/$file";
            }
        }
    }
    print "Done processing $dir\n";
    closedir($dir_handle);
}

# Loop through all mdx files in the current directory including sub directories again
# Loop through each key in the hash
# Replace all http://www.ntrand.com/<key> or https://www.ntrand.com/<key> to relative path from current file to the file
sub replace_links {
    my $dir = shift;
    my $dir_handle;
    opendir( $dir_handle, $dir ) or die "Can't open $dir: $!";
    while ( my $file = readdir($dir_handle) ) {
        next if ( $file =~ m/^\./ );
        if ( -d "$dir/$file" ) {
            replace_links("$dir/$file");
        }
        else {
            if ( $file =~ m/((\d\d\d?)-)?(.*)\.mdx/ ) {
                my $prefix    = $2;
                my $name      = $3;
                my $ext       = "mdx";
                my $file_path = "$dir/$file";
                my $file_content;
                open( my $fh, '<', $file_path )
                  or die "Can't open $file_path: $!";
                {
                    local $/;
                    $file_content = <$fh>;
                }
                close($fh);

                foreach my $key ( keys %mdx_files ) {
                    my $target_file_path = $mdx_files{$key};

                    # Get relative path from current file to the file
                    my $relative_path = File::Spec->abs2rel( $target_file_path,
                        File::Basename::dirname($file_path) );

                    $file_content =~
                      s/http:\/\/www.ntrand.com\/$key\/?\)/$relative_path)/g;
                    $file_content =~
                      s/https:\/\/www.ntrand.com\/$key\/?\)/$relative_path)/g;
                    $file_content =~
s/http:\/\/www.ntrand.com\/jp\/$key\/?\)/$relative_path)/g;
                    $file_content =~
s/https:\/\/www.ntrand.com\/jp\/$key\/?\)/$relative_path)/g;

                    # update index if the relative path contains \d\d\d?-.*\.mdx
                    if ( $relative_path =~ m/(\d\d\d?)-([^\/]*)\.mdx/ ) {

                        # get index from the file name
                        my $index = $relative_path;
                        $index =~ s/.*\/(\d\d\d?)-([^\/]*)\.mdx/$1/g;
                        $index =~ s/(\d\d\d?)-([^\/]*)\.mdx/$1/g;

                        # replace index in case it is outdated
                        $file_content =~ s/\d\d\d?-$key\.mdx/$index-$key.mdx/g;
                    }
                }

                open( my $fh_out, '>', $file_path )
                  or die "Can't open $file_path: $!";

                print $fh_out $file_content;

                close($fh_out);
            }
        }
    }
    closedir($dir_handle);
}

sub to_kebab_case {
    my ($string) = @_;

    # Convert to lowercase
    $string = lc($string);

    # remove dot
    $string =~ s/\.//g;

    # Replace non-alphanumeric characters with hyphens
    $string =~ s/[^a-z0-9]+/-/g;

    # Remove leading and trailing hyphens
    $string =~ s/^-+|-+$//g;

    # Convert to lowercase
    return lc($string);
}

# Visit https://www.ntrand.com/glossary/ and get the source code
# search for all anchors with format of <a id="local_<name>" name="local_<name>">TITLE</a>
# translate TITLE to kebab case
# Loop through all mdx files
# Replace all http://www.ntrand.com/glossary/#local_<name> or https://www.ntrand.com/glossary/#local_<name> to
# /docs/glossary.mdx#new-TITLE

my %anchor_names;

sub get_glossary_links {
    my $url     = "https://www.ntrand.com/glossary/";
    my $content = `curl -s $url`;
    while ( $content =~ m/<a id="local_(.*?)" name="local_(.*?)">(.*?)<\/a>/g )
    {
        my $id    = $1;
        my $title = $3;
        $title = to_kebab_case($title);
        $anchor_names{$id} = $title;
    }

}

sub replace_glossary_links {

    my $dir = shift;
    my $dir_handle;
    opendir( $dir_handle, $dir ) or die "Can't open $dir: $!";
    while ( my $file = readdir($dir_handle) ) {
        next if ( $file =~ m/^\./ );
        if ( -d "$dir/$file" ) {
            replace_glossary_links("$dir/$file");
        }
        else {
            my $file_path = "$dir/$file";
            my $file_content;
            open( my $fh, '<', $file_path )
              or die "Can't open $file_path: $!";
            {
                local $/;
                $file_content = <$fh>;
            }
            close($fh);

            foreach my $key ( keys %anchor_names ) {
                my $title = $anchor_names{$key};

                # case insensitive
                $file_content =~
s/http:\/\/www.ntrand.com\/glossary\/#local_$key/\/docs\/glossary#$title/gi;
                $file_content =~
s/https:\/\/www.ntrand.com\/glossary\/#local_$key/\/docs\/glossary#$title/gi;

            }

            open( my $fh_out, '>', $file_path )
              or die "Can't open $file_path: $!";

            print $fh_out $file_content;

            close($fh_out);
        }
    }
}

get_mdx_files(".");

# print the hash
foreach my $key ( keys %mdx_files ) {
    print "$key => $mdx_files{$key}\n";
}

replace_links(".");

get_glossary_links();

foreach my $key ( keys %anchor_names ) {
    print "$key => $anchor_names{$key}\n";
}

replace_glossary_links(".");
