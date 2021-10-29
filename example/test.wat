(module 
  (func $add (param $x i32) (param $y i32) (result i32)
    get_local $y
    get_local $x
    i32.add
  )

  (export "add" (func $add))
)