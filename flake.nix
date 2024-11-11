# nix comments
{
  description = "Activitn, a software for managing events!";

  # Nixpkgs / NixOS version to use.
  inputs.nixpkgs.url = "nixpkgs/nixpkgs-unstable";

  inputs.flake-utils.url = "github:numtide/flake-utils";

  inputs.pre-commit-hooks.url = "github:cachix/pre-commit-hooks.nix";
  inputs.pre-commit-hooks.inputs.nixpkgs.follows = "nixpkgs";

  outputs = { self, nixpkgs, flake-utils, pre-commit-hooks }:
    let
      version = "0.0.1";

      overlay = final: prev: { };

    in

    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = (nixpkgs.legacyPackages.${system}.extend overlay); in
      {

        packages = rec {
          default = activitn;
          activitn = pkgs.buildNpmPackage {
            pname = "activitn";
            src = ./.;
            inherit version;

            npmDeps = pkgs.importNpmLock {
              npmRoot = ./.;
            };

            dontNpmBuild = true;

            npmConfigHook = pkgs.importNpmLock.npmConfigHook;

            meta = {
              description = "Application for publishing and participating to events";
              homepage = "https://github.com/SamueleFacenda/activitn";
              license = pkgs.lib.licenses.gpl3Only;
            };
          };
        };

        apps = {
          default = {
            type = "app";
            program = "${self.defaultPackage.${system}}/bin/executable";
          };
        };

        devShells = {
          default = pkgs.mkShell {
            packages = with pkgs; [
              importNpmLock.hooks.linkNodeModulesHook
              nodejs
            ];

            npmDeps = pkgs.importNpmLock.buildNodeModules {
              npmRoot = ./.;
              inherit (pkgs) nodejs;
            };

            # buildInputs = self.checks.${system}.pre-commit-check.enabledPackages;
            # inherit (self.checks.${system}.pre-commit-check) shellHook;
          };

        };

        checks = {
          pre-commit-check = pre-commit-hooks.lib.${system}.run {
            src = ./.;
            hooks = {
              nixpkgs-fmt.enable = true;
              shellcheck.enable = true;
            };
          };
        };

        formatter = pkgs.nixpkgs-fmt;
      }
    );
}
