<!SLIDE>
# Tangent

<!SLIDE>
# A bit like interfaces (Java / C#)

<!SLIDE>
		@@@ haskell
		class (Eq a) => Ord a where
		  compare :: a -> a -> Ordering
		  [...]

<!SLIDE>
# \*squint\*

<!SLIDE>
		@@@ java
		public interface Comparable<T> {
		  int compareTo(T o);
		}

<!SLIDE>
		@@@ haskell
		data MyType = MyConstr
		  [...]

		instance Ord MyType where
		  compare x y = 
		    [...]

<!SLIDE>
# \*squint\*

<!SLIDE small>
	@@@ java
	public class MyClass implements Comparable<MyClass> {
	  int compareTo(MyClass o) {
	    [...]
		}
	}

<!SLIDE bullets incremental>
# Translation
* `interface ➝ class`
* `implements ➝ instance`

<!SLIDE>
# What's different?

<!SLIDE>
## Define data type and type class instance separately

### Can even be in a different module

<!SLIDE>
## Can make standard types instances of your typeclasses

<!SLIDE small>
# Repeated class name
	@@@ java
	public class MyClass implements Comparable<MyClass> {
	  int compareTo(MyClass o) {
	    [...]
		}
	}

<!SLIDE>
# OO makes the first argument 'special'
## so special you can't refer to it

<!SLIDE>
# Interface methods always have an argument

<!SLIDE>
# Type class methods can be argument free
## overloaded constants

<!SLIDE>
			@@@ haskell
			class Default a where
			  def :: a

<!SLIDE>
			@@@ haskell
			instance Default Int where
			  def = 0
		
			instance Default Bool where
			  def = False
		
			instance Default [a] where
			  def = []

<!SLIDE>
# In fact the literal numbers are overloaded

<!SLIDE>
	    @@@ haskell
	    Prelude> :t 3
			3 :: Num a => a

<!SLIDE>
		@@@ haskell
		class (Eq a, Show a) => Num a where
		  (+), (-), (*) :: a -> a -> a
		  [...]
		  fromInteger :: Integer -> a

<!SLIDE>
## Overloaded constants special case of overloading on return type

<!SLIDE>
# Example: destringifying
			@@@ haskell
			class Read a where
			  read :: String -> a

<!SLIDE>
			@@@ haskell
			Prelude> (read "5")::Integer
			5
			Prelude> (read "5")::Double
			5.0

<!SLIDE>
# Fancy example: regex matching (demo)
