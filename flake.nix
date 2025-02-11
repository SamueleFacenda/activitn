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

        packages =
          let
            npmDeps = pkgs.importNpmLock {
              npmRoot = ./.;
            };
          in
          rec {
            default = backend;
            backend = pkgs.buildNpmPackage {
              pname = "activitn";
              src = ./.;
              inherit version npmDeps;

              dontNpmBuild = true;
              npmConfigHook = pkgs.importNpmLock.npmConfigHook;

              meta = {
                description = "Application for publishing and participating to events: backend";
                homepage = "https://github.com/SamueleFacenda/activitn";
                license = pkgs.lib.licenses.gpl3Only;
              };
            };
            frontend = pkgs.buildNpmPackage {
              pname = "activitn";
              src = ./.;
              inherit version npmDeps;
              npmFlags = "--workspace frontend";

              npmConfigHook = pkgs.importNpmLock.npmConfigHook;
              dontNpmInstall = true;
              installPhase = ''
                mkdir -p $out
                cp -r frontend/build/* $out
              '';

              meta = {
                description = "Application for publishing and participating to events: frontend";
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
              nodePackages.create-react-app
              nodejs
            ];

            npmDeps = (pkgs.importNpmLock.buildNodeModules {
              npmRoot = ./.; # avoid rebuilding when js code changes
              # package = pkgs.lib.importJSON ./package.json;
              # packageLock = pkgs.lib.importJSON ./package-lock.json;
              inherit (pkgs) nodejs;
              derivationArgs = {
                postPatch = ''
                  mkdir frontend backend
                  cp --no-preserve=mode ${frontend/package.json} frontend/package.json
                  cp --no-preserve=mode ${backend/package.json} backend/package.json
                '';
              };
            });

            buildInputs = self.checks.${system}.pre-commit-check.enabledPackages;
            # hack to make linkNodeModulesHook work (it's not applied if there already is a shellHook)
            shellHook = ''
              runHook linkNodeModulesHook
            '' + self.checks.${system}.pre-commit-check.shellHook;
          };

        };

        checks = {
          pre-commit-check = pre-commit-hooks.lib.${system}.run {
            src = ./.;
            hooks = {
              nixpkgs-fmt.enable = true;
              # eslint.enable = true;
              # shellcheck.enable = true;
            };
          };
        };

        formatter = pkgs.nixpkgs-fmt;
      }
    );
}
