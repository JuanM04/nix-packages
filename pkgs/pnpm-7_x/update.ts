import { getLatestVersion } from "../../scripts/registry.ts";

const { version, url, sha512 } = await getLatestVersion("pnpm", "7.x");

Deno.writeTextFile(
  new URL("./default.nix", import.meta.url),
  `# This file was autogenerated. Edit the update.ts file instead.
{pkgs ? import <nixpkgs> { inherit system; }, system ? builtins.currentSystem}:

pkgs.stdenv.mkDerivation rec {
  name = "pnpm";
  version = "${version}";
  src = pkgs.fetchurl {
    url = "${url}";
    sha512 = "${sha512}";
  };
  doCheck = true;
  phases = [ "unpackPhase" "installPhase" ];
  installPhase = ''
    mkdir $out
    cp -r * $out
    mv $out/bin/pnpm.cjs $out/bin/pnpm
    mv $out/bin/pnpx.cjs $out/bin/pnpx
    chmod +x $out/bin/{pnpm,pnpx}
  '';
}
`
);
