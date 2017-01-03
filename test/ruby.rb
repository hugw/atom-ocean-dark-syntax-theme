require "gem"

string = "string"
symbol = :symbol
fixnum = 0
float  = 0.00
array  = Array.new
array  = ['foo', 85]
hash   = {"foo" => "bar"}
regexp = /^[abc].*$/

# This is a comment
class Person < AnotherPerson
  include Memories

  attr_accessor :name

  def initialize(attributes = {})
    @name = attributes[:name]
  end

  def self.greet
    "hello"
  end

  def hello
    "Hi #{@name}"
  end
end

person1 = Person.new(:name => "Foo")
print Person::greet, " ", person1.name, "\n"
puts "another #{Person::greet} #{person1.name}"
