<!SLIDE title-slide>
# A quick intro to type classes

<!SLIDE>
# The problem

<!SLIDE>
# Want ad-hoc polymorphism

<!SLIDE>
# (aka overloading)

<!SLIDE>
## operations that work differently on different types

<!SLIDE bullets incremental>
# Some examples

* equality
* hashing
* ordering
* stringifying

<!SLIDE>
## Different from parametric polymorphism

<!SLIDE>
## operations that work the same way on different types

<!SLIDE>
			@@@ haskell
			head :: [a] -> a

			fst :: (a, b) -> a

<!SLIDE bullets incremental>
# Simple example: stringifying

* the `Show` class

<!SLIDE>
# Defining the type class

<!SLIDE>
			@@@ haskell
			class Show a where
			  show :: a -> String

<!SLIDE>
# Instance declaration

<!SLIDE>
			@@@ haskell
			instance Show Bool where
			  show True  = "True"
			  show False = "False"

<!SLIDE>
# Default methods

<!SLIDE> 
			@@@ haskell
			class Eq a where
			  (==), (/=) :: a -> a -> Bool

			  x == y = not (x /= y)
			  x /= y = not (x == y)

<!SLIDE>
			@@@ haskell
			instance Eq Bool where
			  True  == True   = True
			  False == False  = True
			  _     == _      = False

<!SLIDE>
# Using typeclass methods

<!SLIDE>
		@@@ haskell

		same x y =
		  if x == y then "yay" else "boo"

<!SLIDE>
		@@@ haskell
		same :: Eq a => a -> a -> String
		same x y =
		  if x == y then "yay" else "boo"

<!SLIDE>
# Class constraints

<!SLIDE>
# Constraints in the instance declaration

<!SLIDE>
	@@@ haskell
	instance Eq a => Eq [a] where
	  ...
	  ...
	  ...

<!SLIDE>
	@@@ haskell
	instance Eq a => Eq [a] where
	  []     == []     = True
	  ...
	  ...

<!SLIDE>
	@@@ haskell
	instance Eq a => Eq [a] where
	  []     == []     = True
	  (x:xs) == (y:ys) = x == y && xs == ys
	  ...
	

<!SLIDE>
	@@@ haskell
	instance Eq a => Eq [a] where
	  []     == []     = True
	  (x:xs) == (y:ys) = x == y && xs == ys
	  _      == _      = False

<!SLIDE>
# Subclasses

<!SLIDE small>
	@@@ haskell
		class (Eq a) => Ord a where
		  compare              :: a -> a -> Ordering
		  (<), (<=), (>), (>=) :: a -> a -> Bool
		  max, min             :: a -> a -> a
