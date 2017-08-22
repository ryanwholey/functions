# Getting started
- Make sure you have node and npm installed. Repo was created with node 7.10.0.

Test that you have node by running
`node --version`

If you don't, I recommend using nvm (node version manager) to get whichever version of node you'd like.

Run the following to instal nvm
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`

Once you have node installed, clone this repo with git

- `cd` into the root directory of the repo and run `npm install`
- run `npm start` to run compile the source code and run the server

Note: 95% of the time you won't have to restart the server, it should reload on its own. Every once in a while the server might die and you might have to turn it on again. 

# Fixing the tests

The only code you need to alter is in the src/ directory.
Add in your definitions for the functions outlined in the src files and make the tests pass!

To turn off a test, you can put an x in front of the `it` function or the `describe` functions, so they will read `xit` and `xdescribe` respectfully. 

You can also run a single test by clicking on the test in the browser. 



