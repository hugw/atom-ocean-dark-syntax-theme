<?php

include('../somefile');

define("CONST_DEF", 'string');

$string     = 'string';
$number     = 0 + 10;
$const      = CONST_DEF;
$array      = array(1, 2, 3);
$assocArray = array("foo" => 1, "bar" => 2);
$regexp     = '/^[abc\.\(].*(a+)$/';

if (!function_exists('func')) {
  function func() {
    echo 'I am a function';
  }
};

func();

// This is a comment
class Person extends AnotherPerson {
  public $name = 'name';

  public function __construct($attributes = array()) {
    $this->name = $attributes['name'];
  }

  public static function greet() {
    return 'Hello';
  }

  public function hello() {
    return "Hi {$this->name}";
  }
}

$person1 = new Person(array('name' => 'Foo'));
echo Person::greet() + ' ' + $person1->name;
echo "Say {$person1->hello()}";
