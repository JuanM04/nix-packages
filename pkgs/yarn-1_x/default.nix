# This file was autogenerated. Edit the update.ts file instead.
{pkgs ? import <nixpkgs> { inherit system; }, system ? builtins.currentSystem}:

pkgs.stdenv.mkDerivation rec {
  name = "yarn";
  version = "1.22.21";
  src = pkgs.fetchurl {
    url = "https://registry.npmjs.org/yarn/-/yarn-1.22.21.tgz";
    sha512 = "ynXaJsADJ9JiZ84zU25XkPGOvVMmZ5b7tmTSpKURYwgELdjucAOydqIOrOfTxVYcNXe91xvLZwcRh68SR3liCg==";
  };
  doCheck = true;
  phases = [ "unpackPhase" "installPhase" ];
  installPhase = ''
    mkdir $out
    cp -r * $out
    chmod +x $out/bin/{yarn,yarnpkg}
  '';
}
