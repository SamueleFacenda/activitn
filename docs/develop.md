# Development environment setup instuctions

### 1. Clone the repo
`git clone git@github.com:SamueleFacenda/activitn.git`

### 2. Intall nix
- Install [nix the package manager](https://nixos.org/download/).
- Enable [nix flakes](https://nixos.wiki/wiki/Flakes#Enable_flakes_permanently_in_NixOS).
- Optional: [install direnv](https://direnv.net/docs/installation.html) to avoid typing `nix develop` every time.

### 3. Enter the environment

If you have direnv just run `direnv allow` from the repository root (as it should be suggested by direnv hitself),
the environment will automaticcally load and unload when entering and exiting the repo tree.

In the other cases just run `nix develop` to enter a bash shell with the environment setup. Just type `exit` (as always)
to exit the shell. 

You don't need to install nodejs, do `npm install` or anything else and the enviromnet is sure to work.
