# A quick intro to type classes

A talk I gave at the Montreal Haskell meetup in March 2013


## Author

Kamal Marhubi <kamal@marhubi.com>


# About the slides

This is a quick presentation I put together for the Montreal Haskell meetup
group.  It introduces type classes, illustrated by examples with like `Eq` and
`Ord`.  I included a comparison with Java-esque interfaces, and ended on a fun
demo of overloading on return type from the regex libraries.


# Viewing the slides

You can [view the slides online](http://kmrhb.github.com/typeclass-talk).


# Showing the slides

The slides use [ShowOff][showoff].  You'll need to install it with

    $ gem install showoff

and then run

    $ showoff serve

This will launch a server you can connect to at `http://localhost:9090/` to run
the slide show.

[showoff]: https://github.com/schacon/showoff


## Patching ShowOff

ShowOff seems to be a little lost maintenance-wise and has not had a release in
some time.  There are two bugs with the version in RubyGems that affected me.
They are fixed in the repository, but there has been no release since.  I
manually applied the fixes for them from [pull request #200][pr].

[pr]: https://github.com/schacon/showoff/pull/200


# LICENSE

This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" rel="dct:type">work</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Kamal Marhubi</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.
