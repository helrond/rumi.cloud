# rumi.cloud

A [webpage](https://rumi.cloud) (and companion to [@rumi_cloud](https://twitter.com/rumi_cloud)) that generates bogus Rumi quotes using a Markov chain generator.

## How it works

This idea grows out of the proliferation of seemingly deep but often meaningless Rumi quotes posted all over social media. [@4joo](https://twitter.com/4joo) suggested that scrambled versions of these quotes were perfect candidates for a Twitter bot that would spew out bogus Rumi quotes.

The quotes on this page are generated using a JavaScript Markov chain generator (the specific implementation is the npm module [markov-strings]()) from text of the *Masnavi*, *Discourses of Rumi* and *Mystical Poems of Rumi* available at the [Internet Archive](https://archive.org).

## Usage/Requirements

This pages uses [Browserify]() to bundle up the necessary code to be executed client-side. If you make changes to `js/app.js` you will need to run `browserify js/app.js -o js/rumi_cloud.js`.

The corpus used by the Markov chain generator is located at `js/data.js`.

## Contributing

Pull requests accepted!

## Authors

Hillel Arnold

## License

Code is released under the MIT License, see `LICENSE.md` for details.
