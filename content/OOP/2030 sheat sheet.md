
primitive type hierarchy 
> - `byte` <: `short` <: `int` <: `long` <: `float` <: `double`
> - `char` <: `int` <: `long` <: `float` <: `double`

wrapper class hierarchy 

| Primitive | Wrapper     |
| --------- | ----------- |
| `byte`    | `Byte`      |
| `short`   | `Short`     |
| `int`     | `Integer`   |
| `long`    | `Long`      |
| `float`   | `Float`     |
| `double`  | `Double`    |
| `char`    | `Character` |
| `boolean` | `Boolean`   |
Object  
└── Number  
    ├── Integer  
    ├── Long  
    ├── Float  
    └── Double

method  signature and descriptor 
signature: method name and argument types, argument order and argument count
descriptor: signature + return type 

dynamic binding method invocation steps 
>[!important] Step 1 happens during compilation
> 1. Determine the compile-time type `C` of `curr`
> 2. Check the class `C` for all [[Access Modifier|accessible methods ]](maybe in [[Subtyping|superclass]]) named `equals()`. If there is none, then it is an compilation error.
> 3. Keep [[Method Overloading|only compatible methods]] that can accept compile-time type `T` of `obj`. If there is none, then it is a compilation error.
> 4. Choose the [[Method Overloading#Method Invocation|most specific method]] and record the [[Function#Function Signature|method descriptor]]. If there is none (or more than one), then it is an compilation error.>[!important] 

>[!important] Step 2 happens during runtime
> 1. Retrieve method descriptor from step 1
> 2. Determine run-time type $C$ of `curr`
> 3. Search for **accessible methods** with **matching method descriptor**(the return type can be a subtype) in $C$. If not found, continue searching up the class hierarchy
> 4. If still not found even in `Object`, the n it is an runtime error.

method overloading 
- Overloading is about changing the **order, number, or types of parameters**.
- works when multiple methods **in the same class or superclass that share the same name but have different [[Function#Function Signature|function signature]]. You create an overloaded method by changing the types, order, or number of parameters** the method takes, while **keeping the method name the same**
method overding 
- happens when  subclass defines an instance method with the same [method descriptor](app://obsidian.md/Function#Function%20Signature) as superclass. The **return type can be different** if it is a [subtype](app://obsidian.md/Subtyping) of the return type of the method in the parent class.
-  good practice, to use [[#@Override]] to ensure method overriding is carried out.

type inference 
1. **Write down all local type constraints:**
    - **Target Typing:** Return type must be the subtype of the variable it is assigned to (if any).
    - **Argument Typing:** The type of the argument must be the subtype of the parameter.
    - **Type Parameter Bound:** From the declaration of the generic type.
2. **Solve the type constraint** for the declared generic type by using:
    - **Reflexive property** , **Transitive property** ,**Anti-Symmetric property** of subtyping relationships.
3. **If there are multiple possible solutions, choose the most specific ones** from the type specified in the constraints.
    - Ignore subclasses not specified in the constraints.
    - The solution may be a **superclass** of the types specified in the constraints.
	remember to check for narrowing type conversation 
generics 
raw type: generic class/interface with no type specified,will lead to compile warning 
generics are invariant need to extend or use wildcards to expand the bounds 