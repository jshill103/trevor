<?php
class Vehicle
{
    // property declarations
    public $type, $mpg, $id;

    // method declaration
    public function getValues($id) {
        //DB connection
		//query for id and return only the data matching the id passed in
        $values = json_decode(file_get_contents('/vehicles.json'), true);
		for($values.$id as $k => $v){
		$this->$k = $v;
		}
    }
}
?>