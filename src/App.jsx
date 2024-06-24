import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-csharp';
import ButtonPage from "./ButtonPage.jsx";
import ButtonPart from "./ButtonPart.jsx";
import TexttoCode from "./code.jsx";
import Info from "./info.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const structure = `
Tp-acdc
├── TheGreatOffensive
│   ├── Attack
│   │   ├── Galaxy.cs
│   │   └── Planet.cs
│   ├── Preparation
│   │   ├── Documents.cs
│   │   ├── Encryption.cs
│   │   └── EnumLists.cs
│   ├── Tests
│   │   └── Put your tests inside here
│   ├── TheGreatOffensive.csproj
│   └── Program.cs
├── .gitignore
├── TheGreatOffensive.sln
└── README
  `;
  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full pl-5 pr-5 pt-3 pb-3">
      <img src="https://static.wikia.nocookie.net/frstarwars/images/e/e2/P%C3%A8re_vs_Fils.jpg" className="w-80 h-44 object-cover" alt="Description du GIF" />
      <h1 className="text-4xl font-sans font-semibold p-1 mt-2">The Great Offensive</h1>
      <h2 className="italic text-3xl p-2">Indexers and Iterators</h2>
      <ButtonPage title={"Guideline"} color={"info"} content={
        <div>
          <div className="bg-red-600 text-white rounded-t-lg p-3">
        <span
          className="font-semibold bg-red-600 pr-2 pl-2 pb-1.5 pt-1.5 bg rounded border border-gray-800 border-2">Repository structure</span>
          </div>
          <div className="bg-code_color p-1 rounded-b-lg">
            <pre className="text-gray-400 pl-2">{structure}</pre>
          </div>
          <br />
          <p className="mb-2">
            Do not forget to check the following requirements before submitting your work:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>The <span className="text-red-600">README</span> file is mandatory.</li>
            <li>The given prototypes must be strictly respected.</li>
            <li className="font-bold">Do not forget to test your code.</li>
          </ul>
        </div>
      } />

      <h3 className="text-4xl font-semibold p-2">Introduction</h3>
      <p className="mb-4 p-2 text-justify text-xl"> A long time ago in a galaxy far, far away... <br/> The Rebel Alliance has acquired the plans for the Death Star. The next step is to send the encrypted plans to all the Rebels to destroy the Death Star and defeat the Empire. Your mission to save the galaxy is to distribute the plans to all the Rebels and repair the navigation system. <span className="font-semibold">May the Force be with you</span>.</p>


      <ButtonPage title={"Light Side - May the Force Be With You"} color={"easy"} content={
        <div className="">
          <p className="mb-4 ">
            In this section, you will look at the basis of the indexers and enumerators. Then we will be able to start our plan to prepare our attack against the Empire.<br/>
            <br/>
            <span className="italic text-xl">"Much to learn, you still have."</span>
          </p>
          <pre className="mb-4 text-red-600 text-2xl">
            EnumLists.cs
          </pre>
          <p className="mb-4">In this folder, you have to create a static class called Enum and implement the following methods</p>
          <ButtonPart title={"EnumList"} color={"easy"} content={
            <div>
              <p className="mb-4">
                You need to create a method called EnumList that will return a list of numbers from the input list.
              </p>
              <TexttoCode code={`public IEnumerable<int> EnumList(int[] list);`} title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`List<int> my_list = new List<int>();
              
my_list.Add(9);
my_list.Add(8);
my_list.Add(7);
my_list.Add(6);
my_list.Add(5);
my_list.Add(4);
my_list.Add(3);

foreach(int number in EnumList(my_list))
{
    Console.Write(number);
}
// "9876543"`} title={"Code example(s)"}/>
            </div>


          } />


          <ButtonPart title={"EnumMultipleOf7"} color={"easy"} content={
            <div>
              <p className="mb-4">
                You need to create a method that will return the numbers that are multiples of 7 called EnumMultipleOf7.
              </p>
              <TexttoCode code={`public IEnumerable<int> EnumMultipleOf7(int[] list);`} title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`List<int> my_list = new List<int> { 7, 14, 21, 22, 25, 28, 35, 40 };

IEnumerable<int> multiplesOf7 = EnumMultipleOf7(my_list);

foreach (int number in multiplesOf7)
{
    Console.WriteLine(number + " ");
}
//"7 14 21 28 35 "`} title={"Code example(s)"}/>

            </div>
          } />

          <ButtonPart title={"EnumInOrder"} color={"easy"} content={
            <div>
              <p className="mb-4">
                You need to create a method that will return the numbers in order called EnumInOrder.
              </p>
              <TexttoCode code={`public IEnumerable<int> EnumInOrder(int[] list);`} title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`// Creating a List<int>
List<int> my_list = new List<int>();

// Adding elements to List
my_list.Add(7);
my_list.Add(6);
my_list.Add(8);
my_list.Add(1);
my_list.Add(5);
my_list.Add(6);
my_list.Add(2);

foreach(int number in EnumInOrder(my_list))
{
    Console.Write(number);
}
// "1256678"`} title={"Code example(s)"}/>

            </div>
          } />

          <br />
          <pre className="mb-4 text-red-600 text-2xl">
            Documents.cs
          </pre>

          <p className="mb-4">We received the plans of the Death Star. You need a new class called Documents to store all the information. This class inherits from IEnumerable</p>

          <ButtonPart title={"Attributes"} color={"easy"} content={
            <div>
              <p className="mb-4"> Create a class that will have attributes for the document.</p>
              <ul className="list-disc list-inside">
                <li><span className="text-red-600">_list</span> => A private list of strings.</li>
                <li><span className="text-red-600">_length</span> => A private property that represents the length of _list.</li>
                <li><span className="text-red-600">_position</span> => A private property that represents the current index position in _list.</li>
              </ul>
            </div>
          } />

          <ButtonPart title={"Constructor"} color={"easy"} content={
            <div>
              <p className="mb-4">You will now create the constructor for the class, which will initialize the list.</p>
              <TexttoCode code={`public Documents(List<string> list);`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"GetLength"} color={"easy"} content={
            <div>
              <p className="mb-4">You have to create a public method that will return the length of the list.</p>
              <TexttoCode code={`public int GetLength();`} title={"Prototype(s)"}/>
              <br/>
              <TexttoCode code={`List<string> list = new List<string> { "Hello", "World" };
Documents documents = new Documents(list);
Console.WriteLine(documents.GetLength());
// 2`} title={"Code example(s)"}/>
            </div>
          } />

          <ButtonPart title={"Add"} color={"easy"} content={
            <div>
              <p className="mb-4"> You need a public method that will add a word to the list.</p>
              <TexttoCode code={`public void Add(string word);`} title={"Prototype(s)"}/>
              <br/>
              <TexttoCode code={`List<string> list = new List<string>();
Documents documents = new Documents(list);
documents.Add("Hello");
documents.Add("World");
// {"Hello", "World"}`} title={"Code example(s)"}/>
            </div>
          } />

          <ButtonPart title={"Remove"} color={"easy"} content={
            <div>
              <p className="mb-4">You need a public method that will remove a word from the list at a specified
                index.</p>
              <TexttoCode code={`public void Remove(int index);`} title={"Prototype(s)"} />
              <br />
<TexttoCode code={`List<string> list = new List<string> { "Hello", "World" };
Documents documents = new Documents(list);
documents.Remove(0);
// {"World"}
documents.Remove(2); // ArgumentOutOfRangeException
documents.Remove(0);
documents.Remove(0); // ArgumentOutOfRangeException
`} title={"Code example(s)"}/>
              <br />


              <div className="bg-orange-600 text-white rounded-t-lg p-3">

        <span
          className="font-semibold bg-orange-400 pr-2 pl-2 pb-1.5 pt-1.5 bg rounded border border-gray-800 border-2">Warning</span>
              </div>
              <div className=" p-1  bg-white">
                <p className="mb-4 mt-4">The method should throw an <span
                  className="text-red-600 font-bold">ArgumentOutOfRangeException</span> if the index is invalid or the list is empty.</p>
              </div>
            </div>

          } />

          <ButtonPart title={"Indexer"} color={"easy"} content={
            <div>
              <p className="mb-4"> Create an indexer that will allow you to access the words in the list by index and modify them.</p>
              <TexttoCode code={`public string this[int index]
{
    get
    {
        throw new NotImplementedException();
    }
    set
    {
        throw new NotImplementedException();
    }
}`} title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`List<string> list = new List<string>();

Documents documents = new Documents(list);
documents.Add("Hello");
documents.Add("World");

for (int i = 0; i < documents.GetLength(); i++)
{
    Console.Write(documents[i] + " ");
}
// "Hello World"

documents[0] = "Code";
documents.Remove(1);
for (int i = 0; i < documents.GetLength(); i++)
{
    Console.Write(documents[i] + " ");
}
// "Code"

documents.Remove(0);
Console.WriteLine(documents[0]); // IndexOutOfRangeException`} title={"Code example(s)"} />

              <br />
              <div className="bg-orange-600 text-white rounded-t-lg p-3">
        <span
          className="font-semibold bg-orange-400 pr-2 pl-2 pb-1.5 pt-1.5 bg rounded border border-gray-800 border-2">Warning</span>
              </div>
              <div className=" p-1  bg-white">
                <p className="mb-4 mt-4">The method should throw an <span
                  className="text-red-600 font-bold">IndexOutOfRangeException</span> if the index is out of range.</p>
              </div>
            </div>
          } />

          <ButtonPart title={"GetEnumerator"} color={"easy"} content={
            <div>
              <p className="mb-4">Create a method that will return the enumerator of all the words in the list.</p>
              <TexttoCode code={`public IEnumerator GetEnumerator();`} title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`List<string> list = new List<string>();
Documents documents = new Documents(list);
documents.Add("Hello");
documents.Add("World");

foreach (string document in documents)
{
    Console.WriteLine(document);
}
// "Hello"
// "World"`} title={"Code example(s)"}/>
            </div>


          } />

          <p className="mb-4">You need to modify the inheritance of the Documents class to include IEnumerator. In this section, you will see how to use iterators for the class with a while loop. <br/>Now you will use the propertie <span className="text-red-600 font-bold">_position</span> which is representing the current index in the list.
            <br/>The position index need to be equal to <span className="font-bold">-1</span> when you start and reset.</p>

          <ButtonPart title={"MoveNext"} color={"easy"} content={
            <div>
              <p className="mb-4"> Create a method that will return true if there is a next word or false if the index is out of range.</p>
              <TexttoCode code={`public bool MoveNext();`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"Reset"} color={"easy"} content={
            <div>
              <p className="mb-4"> You will now create a method that will reset the index.</p>
              <TexttoCode code={`public void Reset()`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"Current"} color={"easy"} content={
            <div>
              <p className="mb-4">Here, you need to modify the getter to return the string at the current index.
                <br/><br/><span className="font-bold">P.S</span>: The type object in this exercice represents the type string.</p>
              <TexttoCode code={`public object Current 
{ 
    get
    {
        throw new NotImplementedException();
    }
}`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"Example"} color={"easy"} content={
            <div>
              <p className="mb-4">Here is an example of how to test the three methods mentioned above.</p>
              <TexttoCode code={`List<string> list = new List<string> { "Hello", "World" };
Documents documents = new Documents(list);

while (documents.MoveNext())
{
    Console.WriteLine(documents.Current);
}

documents.Reset();
// "Hello"
// "World"
`} title={"Code example(s)"}/>
            </div>
          } />

          <img src="https://64.media.tumblr.com/7e27774f53caec8835babfc9333b01ba/tumblr_pfsf6wv0uv1w4t7wqo4_540.gif" alt="Description du GIF" className="w-96 h-48 mx-auto" />


        </div>
      } />

      <ButtonPage title={"Force Side - A New Hope"} color={"medium"} content={
        <div className="">
          <p className="mb-4">
            Now that we have the plans, we need to encrypt them to send them to all the Rebels. You will create a
            class called Encryption that will have different methods to encrypt and decrypt the document.
          </p>
          <span className="italic text-xl">"Patience you must have my young Padawan."</span>
          <br />
          <br />
          <pre className="mb-4 text-red-600 text-2xl">
            Encryption.cs
          </pre>

          <p className="mb-4">Before creating the method in the class, you need to create two delegates: one for
            encryption and one for decryption. Add these prototypes just before the class definition. (don't modify
            it)</p>
          <p className="font-semibold">All the text for the encryption and decryption methods will be in lowercase.</p>
          <ButtonPart title={"Delegates"} color={"medium"} content={
            <div>
              <TexttoCode code={`public delegate string Encrypt_Delegate(string text, string key);
public delegate string Decrypt_Delegate(string text, string key);`} title={"Prototype(s)"} />
              <br />
            </div>
          } />
          <p className="mb-4">Now, you have to create a static class call Encryption and implement the following
            methods.</p>
          <ButtonPart title={"Substitution_Encrypt"} color={"medium"} content={
            <div>
              <p className="mb-4"> You need to create a method that will encrypt the text by using the substitution
                method. <br />The substitution method is a simple encryption method that replaces each letter in the
                text by another one. The key is a string that contains the letters in the order they should be
                replaced.
                <br /> Here the parameter <span className="text-red-600 font-bold">text</span> is the text to encrypt
                and the parameter <span className="text-red-600 font-bold">key</span> is the key to encrypt the text.
              </p>
              <TexttoCode code={`private static string Substitution_Encrypt(string text, string key);`}
                          title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`string plaintext = "hello";
string key = "qwertyuiopasdfghjklzxcvbnm";
string encryptedText = Substitution_Encrypt(plaintext, key);
Console.WriteLine(encryptedText);
// "qryyp"`} title={"Code example(s)"} />
            </div>
          } />

          <ButtonPart title={"Substitution_Decrypt"} color={"medium"} content={
            <div>
              <p className="mb-4"> You need to create a method that will decrypt the text by using the substitution
                method. <br />The substitution method is a simple encryption method that replaces each letter in the
                text by another one. The key is a string that contains the letters in the order they should be
                replaced.
                <br /> Here the parameter <span className="text-red-600 font-bold">text</span> is the text to decrypt
                and the parameter <span className="text-red-600 font-bold">key</span> is the key to decrypt the text.
              </p>
              <TexttoCode code={`private static string Substitution_Decrypt(string text, string key);`}
                          title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`string encryptedText = "qryyp";
string key = "azertyuipqsdfgjohekmwxcvlb";
string decryptedText = Substitution_Decrypt(encryptedText, key);
Console.WriteLine(decryptedText);
// "hello"`} title={"Code example(s)"} />
            </div>
          } />

          <ButtonPart title={"RotationOf10_Encrypt"} color={"medium"} content={
            <div>
              <p className="mb-4"> You need to create a method that will encrypt the text by using the rotation of 10
                method. <br />The rotation of 10 method is a simple encryption method that replaces each letter in the
                text with the letter that is 10 positions ahead in the alphabet. If the letter is at the end of the
                alphabet, it will wrap around to the beginning.</p>
              <TexttoCode code={`private static string RotationOf10_Encrypt(string text);`} title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`string plaintext = "hello";
string encryptedText = RotationOf10_Encrypt(plaintext);
Console.WriteLine(encryptedText);
// "rovvy"`} title={"Code example(s)"} />
            </div>
          } />

          <ButtonPart title={"RotationOf10_Decrypt"} color={"medium"} content={
            <div>
              <p className="mb-4"> You need to create a method that will decrypt the text by using the rotation of 10
                method. <br />Each letter must be shifted 10 positions to the left in the alphabet to find the
                plaintext.</p>
              <TexttoCode code={`private static string RotationOf10_Decrypt(string text);`} title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`string encryptedText = "rovvy";
string decryptedText = RotationOf10_Decrypt(encryptedText);
Console.WriteLine(decryptedText);
// "hello"`} title={"Code example(s)"} />
            </div>
          } />

          <ButtonPart title={"Vigenere_Encrypt"} color={"medium"} content={
            <div>
              <p className="mb-4"> You need to create a method that will encrypt the text by using the Vigenere
                method. <br />The Vigenere method is a simple encryption method that uses a keyword to encrypt the text.
                The keyword is repeated until it is the same length as the text. Each letter in the text is shifted by
                the corresponding letter in the keyword.</p>
              <TexttoCode code={`private static string Vigenere_Encrypt(string text, string key);`}
                          title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`string plaintext = "hello";
string key = "key";
string encryptedText = Vigenere_Encrypt(plaintext, key);
Console.WriteLine(encryptedText);
// "rovvy"`} title={"Code example(s)"} />
            </div>
          } />

          <ButtonPart title={"Vigenere_Decrypt"} color={"medium"} content={
            <div>
              <p className="mb-4"> You need to create a method that will decrypt the text by using the Vigenere
                method. <br />Each letter must be shifted back by the corresponding letter in the keyword to find the
                plaintext.</p>
              <TexttoCode code={`private string Vigenere_Decrypt(string text, string key);`} title={"Prototype(s)"} />
              <br />

              <TexttoCode code={`string encryptedText = "rovvy";
string key = "key";
string decryptedText = Vigenere_Decrypt(encryptedText, key);
Console.WriteLine(decryptedText);
// "hello"`} title={"Code example(s)"} />

            </div>
          } />

          <ButtonPart title={"GetEncryptDelegate"} color={"medium"} content={
            <div>
              <p className="mb-4"> You need to create a method that will return the encryption delegate based on the name
                of the encryption method. <br />
                if the name is "<span className="font-bold">Substitution</span>", return the Substitution_Encrypt
                method. <br />
                if the name is "<span className="font-bold">Vigenere</span>", return the Vigenere_Encrypt method.<br />
                Don't test for the RotationOf10 method.</p>

              <TexttoCode code={`public static Encrypt_Delegate GetEncryptDelegate(string name);`}
                          title={"Prototype(s)"} />
              <br />

              <TexttoCode code={`Encrypt_Delegate encryptDelegate = GetEncryptDelegate("Substitution"); // Substitution_Encrypt method
string encryptedText = encryptDelegate("hello", "qwertyuiopasdfghjklzxcvbnm");
Console.WriteLine(encryptedText);
// "qryyp"`} title={"Code example(s)"} />
              <br/>
              <div className="bg-orange-600 text-white rounded-t-lg p-3">
        <span
          className="font-semibold bg-orange-400 pr-2 pl-2 pb-1.5 pt-1.5 bg rounded border border-gray-800 border-2">Warning</span>
              </div>
              <div className=" p-1  bg-white">
                <p className="mb-4 mt-4">The method should throw an <span
                  className="text-red-600 font-bold">ArgumentException</span> if the name is not valid.</p>
              </div>
            </div>
          } />

          <ButtonPart title={"GetDecryptDelegate"} color={"medium"} content={
            <div>
              <p className="mb-4"> You need to create a method that will return the decryption delegate based on the
                name
                of the decryption method. <br />
                if the name is "<span className="font-bold">Substitution</span>", return the Substitution_Decrypt
                method. <br />
                if the name is "<span className="font-bold">Vigenere</span>", return the Vigenere_Decrypt method.<br />
                Don't test for the RotationOf10 method.</p>
              <TexttoCode code={`public static Decrypt_Delegate GetDecryptDelegate(string name);`}
                          title={"Prototype(s)"} />
              <br />

              <TexttoCode code={`Decrypt_Delegate decryptDelegate = GetDecryptDelegate("Substitution"); // Substitution_Decrypt method
string decryptedText = decryptDelegate("qryyp", "azertyuipqsdfgjohekmwxcvlb");
Console.WriteLine(decryptedText);
// "hello"

Decrypt_Delegate InvalidDecryptDelegate = GetDecryptDelegate("RotationOf10"); // ArgumentException`} title={"Code example(s)"} />
              <br />
              <div className="bg-orange-600 text-white rounded-t-lg p-3">
        <span
          className="font-semibold bg-orange-400 pr-2 pl-2 pb-1.5 pt-1.5 bg rounded border border-gray-800 border-2">Warning</span>
              </div>
              <div className=" p-1  bg-white">
                <p className="mb-4 mt-4">The method should throw an <span
                  className="text-red-600 font-bold">ArgumentException</span> if the name is not valid.</p>
              </div>
            </div>
          } />
          <br />

          <pre className="mb-4 text-red-600 text-2xl">
            Documents.cs
          </pre>
          <p className="mb-4">You have to update the Documents class to include the encryption and decryption delegates.
            Then we can safely encrypt and decrypt the document and send it to the Rebels.</p>

          <ButtonPart title={"EnumEncrypt"} color={"medium"} content={
            <div>
              <p className="mb-4">You have to implement a method that will encrypt all the words in the list using the
                encryption delegate and return the encrypted words as an IEnumerable.</p>
              <TexttoCode code={`public IEnumerable<string> EnumEncrypt(Encrypt_Delegate encrypt, string key);`}
                          title={"Prototype(s)"} />
              <br />

              <TexttoCode code={`List<string> list = new List<string> { "hello", "world" };
Documents documents = new Documents(list);
encryptDelegate = Encryption.GetEncryptDelegate("Substitution");
foreach (string document in documents.EnumEncrypt(encryptDelegate, "qwertyuiopasdfghjklzxcvbnm"))
{
    Console.WriteLine(document);
}
// "qryyp"
// "xjyld"`} title={"Code example(s)"} />
            </div>
          } />

          <ButtonPart title={"IndexerEncrypt"} color={"medium"} content={
            <div>
              <p className="mb-4">You have to implement a method that will encrypt the word at the specified index using
                the encryption delegate.</p>
              <TexttoCode code={`public string this[int index, Encrypt_Delegate encrypt, string key]
{
    get
    {
        throw new NotImplementedException();
    }
}`} title={"Prototype(s)"} />
              <br />

              <TexttoCode code={`List<string> list = new List<string> { "hello", "world" };
Documents documents = new Documents(list);
encryptDelegate = Encryption.GetEncryptDelegate("Substitution");
Console.WriteLine(documents[0, encryptDelegate, "qwertyuiopasdfghjklzxcvbnm"]);
// "qryyp"`} title={"Code example(s)"} />

              <br />
              <div className="bg-orange-600 text-white rounded-t-lg p-3">
        <span
          className="font-semibold bg-orange-400 pr-2 pl-2 pb-1.5 pt-1.5 bg rounded border border-gray-800 border-2">Warning</span>
              </div>
              <div className=" p-1  bg-white">
                <p className="mb-4 mt-4">The method should throw an <span className="text-red-600 font-bold">IndexOutOfRangeException</span> if the index is out of range.</p>
              </div>
            </div>
          } />

          <ButtonPart title={"EnumDecrypt"} color={"medium"} content={
            <div>
              <p className="mb-4">You have to implement a method that will decrypt all the words in the list using the
                decryption delegate and return the decrypted words as an IEnumerable.</p>
              <TexttoCode code={`public IEnumerable<string> EnumDecrypt(Decrypt_Delegate decrypt, string key);`}
                          title={"Prototype(s)"} />
              <br />

              <TexttoCode code={`List<string> list = new List<string> { "qryyp", "xjyld" };
Documents documents = new Documents(list);
decryptDelegate = Encryption.GetDecryptDelegate("Substitution");
foreach (string document in documents.EnumDecrypt(decryptDelegate, "qwertyuiopasdfghjklzxcvbnm"))
{
    Console.WriteLine(document);
}
// "hello"
// "world"`} title={"Code example(s)"} />
            </div>
          } />

          <img src="https://spacefiction.fr/wp-content/uploads/2016/02/star_wars_iv_97th.gif"
               alt="Description du GIF" className="w-96 h-48 mx-auto" />

        </div>
      } />

      <ButtonPage title={"Dark Side - The Empire Strikes Back"} color={"hard"} content={
        <div className="">
          <p className="mb-4">
            We have sent the encrypted plans to the Rebels. Now, we are preparing our attack on the Death
            Star. However, we are facing an issue with our navigation system. You have to develop a new
            system to assist us in finding the shortest path between two planets.
          </p>
          <span className="italic text-xl">"Your path you must decide."</span>
          <br />
          <br />
          <pre className="mb-4 text-red-600 text-2xl">
            Planet.cs
          </pre>

          <p className="mb-4">In this folder, you have to create a class call Planet and implement the following methods and attributes</p>
          <ButtonPart title={"Attributes"} color={"hard"} content={
            <div>
              <ul className="list-disc list-inside">
                <li><span className="text-red-600">Name</span> => A public property that represents the name of the planet.</li>
                <li><span className="text-red-600">_neighbors</span> => A private property that represents a list of tuples containing the neighboring planets and the distance to them.</li>
              </ul>
            </div>
          } />

          <ButtonPart title={"Constructor"} color={"hard"} content={
            <div>
              <p className="mb-4"> Create the constructor for the class, which will initialize the name of the planet and the list of neighbors.</p>
              <TexttoCode code={`public Planet(string name);`} title={"Prototype(s)"} />
            </div>
          } />

          <ButtonPart title={"AddNeighbor"} color={"hard"} content={
            <div>
              <p className="mb-4"> You need a public method that will add a neighbor and the distance to the list of neighbors.</p>
              <TexttoCode code={`public void AddNeighbor(Planet neighbor, int distance);`} title={"Prototype(s)"} />
              <br/>
              <TexttoCode code={`Planet planet1 = new Planet("Alderaan");
Planet planet2 = new Planet("Tatooine");
planet1.AddNeighbor(planet2, 10);
// planet1._neighbors = {(planet2, 10)}`} title={"Code example(s)"}/>
            </div>
          } />


          <ButtonPart title={"GetEnumNeighbors"} color={"hard"} content={
            <div>
              <p className="mb-4"> Create a method that will return the enumerator of all the neighbors in the list and the distance to them.</p>
              <TexttoCode code={`public IEnumerable<(Planet, int)> GetEnumNeighbors();`} title={"Prototype(s)"} />

              <br />
              <TexttoCode code={`Planet planet1 = new Planet("Alderaan");
Planet planet2 = new Planet("Tatooine");
planet1.AddNeighbor(planet2, 10);

foreach ((Planet neighbor, int distance) in planet1.GetEnumNeighbors())
{
    Console.WriteLine(neighbor.Name + " " + distance);
}
// "Tatooine 10"`} title={"Code example(s)"}/>
            </div>
          } />

          <pre className="mb-4 text-red-600 text-2xl">
            Galaxy.cs
          </pre>

          <p className="mb-4">In this folder, you have to create a class call Galaxy and implement the following methods and attributes</p>

          <ButtonPart title={"Attribute"} color={"hard"} content={
            <div>
              <ul className="list-disc list-inside">
                <li><span className="text-red-600">Planets</span> => A public attribute that represents a list of planets in the galaxy.</li>
              </ul>
            </div>
          } />

          <ButtonPart title={"Constructor"} color={"hard"} content={
            <div>
              <p className="mb-4"> You have to create the constructor for the class, which will initialize the list of planets.</p>
              <TexttoCode code={`public Galaxy();`} title={"Prototype(s)"} />
            </div>
          } />

          <ButtonPart title={"AddPlanet"} color={"hard"} content={
            <div>
              <p className="mb-4"> You need a public method that will add a planet to the list of planets.</p>
              <TexttoCode code={`public void AddPlanet(Planet planet);`} title={"Prototype(s)"} />

              <br/>
              <TexttoCode code={`Galaxy galaxy = new Galaxy();
Planet planet1 = new Planet("Alderaan");
Planet planet2 = new Planet("Tatooine");
galaxy.AddPlanet(planet1);
galaxy.AddPlanet(planet2);

// galaxy.planets = [planet1, planet2]`} title={"Code example(s)"}/>
            </div>
          } />

          <ButtonPart title={"AddConnection"} color={"hard"} content={
            <div>
              <p className="mb-4"> You need a public method that will add a connection between the two planets and the distance to the list of neighbors.</p>
              <TexttoCode code={`public void AddConnection(Planet planet1, Planet planet2, int distance);`}
                          title={"Prototype(s)"} />
              <br/>
              <TexttoCode code={`Galaxy galaxy = new Galaxy();
Planet planet1 = new Planet("Alderaan");
Planet planet2 = new Planet("Tatooine");
galaxy.AddPlanet(planet1);
galaxy.AddPlanet(planet2);
galaxy.AddConnection(planet1, planet2, 10);

foreach ((Planet neighbor, int distance) in planet1.GetEnumNeighbors())
{
    Console.WriteLine(neighbor.Name + " " + distance);
}
// "Tatooine 10"`} title={"Code example(s)"}/>
            </div>
          } />

          <ButtonPart title={"FindShortestPath"} color={"hard"} content={
            <div>
              <p className="mb-4"> You need to create a method to find the shortest path between two planets in the
                galaxy so that we can successfully destroy the Death Star.<br />
                You can use the <a href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
                                   className="text-blue-800 underline">Dijkstra algorithm</a> to find the shortest path
                between two planets.</p>
              <TexttoCode code={`public List<Planet> FindShortestPath(Planet start, Planet end);`}
                          title={"Prototype(s)"} />
              <br />
              <TexttoCode code={`Galaxy galaxy = new Galaxy();
Planet planet1 = new Planet("Alderaan");
Planet planet2 = new Planet("Tatooine");
Planet planet3 = new Planet("Endor");
Planet planet4 = new Planet("Hoth");
Planet planet5 = new Planet("Dagobah");
galaxy.AddPlanet(planet1);
galaxy.AddPlanet(planet2);
galaxy.AddPlanet(planet3);
galaxy.AddPlanet(planet4);
galaxy.AddPlanet(planet5);
galaxy.AddConnection(planet1, planet2, 10);
galaxy.AddConnection(planet1, planet3, 20);
galaxy.AddConnection(planet2, planet3, 5);
galaxy.AddConnection(planet3, planet4, 15);
galaxy.AddConnection(planet4, planet5, 25);

List<Planet> shortestPath = galaxy.FindShortestPath(planet1, planet5);
for (i = 0; i < shortestPath.Count-1; i++)
{
    Console.Write(planet.Name + " -> ");
}

Console.WriteLine(shortestPath[shortestPath.Count-1].Name);
// "Alderaan -> Tatooine -> Endor -> Hoth -> Dagobah"`} title={"Code example(s)"} />
              <br />
              <div className="bg-orange-600 text-white rounded-t-lg p-3">
        <span
          className="font-semibold bg-orange-400 pr-2 pl-2 pb-1.5 pt-1.5 bg rounded border border-gray-800 border-2">Warning</span>
              </div>
              <div className=" p-1  bg-white">
                <p className="mb-4 mt-4">It is possible that there is more than one shortest path between two planets.
                  In this case, you can return any of them.</p>
                <p className="mb-4 mt-4">The method should return null if there is no path between the two planets.</p>
              </div>

            </div>

          } />

          <img src="https://qph.cf2.quoracdn.net/main-qimg-02b971fe4719034bc990aeb2f16e62b6"
               alt="Description du GIF" className="w-96 h-48 mx-auto" />

        </div>
      } />

      <Footer />


    </div>

  );
}

export default App;
