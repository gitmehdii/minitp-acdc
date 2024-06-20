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

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full">
      <ButtonPage title={"Light Side - May the Force Be With You"} color={"easy"} content={
        <div className="">
          <p className="mb-4">
            In this section, we'll look at the basics of preparing to attack our enemies, the Empire.
          </p>
          <pre className="mb-4 text-red-600 text-2xl">
            Enum.cs
          </pre>
          <ButtonPart title={"EnumList"} color={"easy"} content={
            <div>
              <p className="mb-4">
                In order to make the ordering easier, we'll create an EnumList.
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
                We'll now create a function that will return the numbers that are multiples of 7.
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
                We'll now create a function that will return the numbers in order.
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

          <p className="mb-4">You need to create a class call Documents.</p>

          <ButtonPart title={"Properties"} color={"easy"} content={
            <div>
              <p className="mb-4"> We'll now create a class that will have properties for the document.</p>
              <ul className="list-disc list-inside">
                <li><span className="text-red-600">_list</span> => list of string</li>
                <li><span className="text-red-600">_length</span> => length of _list</li>
                <li><span className="text-red-600">_position</span> => position of the index</li>
              </ul>
            </div>
          } />

          <ButtonPart title={"Constructor"} color={"easy"} content={
            <div>
              <TexttoCode code={`public Documents(List<string> list);`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"Add"} color={"easy"} content={
            <div>
              <p className="mb-4"> We'll now create a function that will add a word to the list.</p>
              <TexttoCode code={`public void Add(string word);`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"Remove"} color={"easy"} content={
            <div>
              <p className="mb-4"> We'll now create a function that will remove a word from the list.</p>
              <TexttoCode code={`public void Remove(int index);`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"Indexer"} color={"easy"} content={
            <div>
              <p className="mb-4"> We'll now create a indexer that will return the word at the index.</p>
              <TexttoCode code={`public string this[int index];`} title={"Prototype(s)"}/>
            </div>
          } />

          <br/>

          <ButtonPart title={"MoveNext"} color={"easy"} content={
            <div>
              <p className="mb-4"> We'll now create a function that will return true if there is a next word.</p>
              <TexttoCode code={`public bool MoveNext();`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"Reset"} color={"easy"} content={
            <div>
              <p className="mb-4"> We'll now create a function that will reset the index.</p>
              <TexttoCode code={`public void Reset()`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"Current"} color={"easy"} content={
            <div>
              <p className="mb-4"> We'll now create a function that will return the current word.</p>
              <TexttoCode code={`public string Current { get; }`} title={"Prototype(s)"}/>
            </div>
          } />

          <img src="https://64.media.tumblr.com/7e27774f53caec8835babfc9333b01ba/tumblr_pfsf6wv0uv1w4t7wqo4_540.gif" alt="Description du GIF" className="w-96 h-48 mx-auto" />


        </div>
      } />

      <ButtonPage title={"Force Side - A New Hope"} color={"medium"} content={
        <div className="">
          <p className="mb-4">
            In this section, we'll look at the basics of preparing to defend ourselves from the Rebels.
          </p>

          <pre className="mb-4 text-red-600 text-2xl">
            Encryption.cs
          </pre>
          <ButtonPart title={"Properties"} color={"medium"} content={
            <div>
              <p className="mb-4"> We'll now create a class that will have properties for the document.</p>
              <ul className="list-disc list-inside">
                <li><span className="text-red-600">Encrypt_Delegate</span></li>
                <li><span className="text-red-600">Decrypt_Delegate</span></li>
              </ul>
            </div>
          } />
          <ButtonPart title={"Substitution_Encrypt"} color={"medium"} content={
            <div>
              <TexttoCode code={`private string Substitution_Encrypt(string text, string key);`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />

          <ButtonPart title={"RotationOf10_Encrypt"} color={"medium"} content={
            <div>
              <TexttoCode code={`private string RotationOf10_Encrypt(string text);`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />

          <ButtonPart title={"RotationOf10_Decrypt"} color={"medium"} content={
            <div>
              <TexttoCode code={`private string RotationOf10_Decrypt(string text);`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />

          <ButtonPart title={"Vigenere_Encrypt"} color={"medium"} content={
            <div>
              <TexttoCode code={`private string Vigenere_Encrypt(string text, string key);`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />

          <ButtonPart title={"Vigenere_Decrypt"} color={"medium"} content={
            <div>
              <TexttoCode code={`private string Vigenere_Decrypt(string text, string key);`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />

          <ButtonPart title={"GetEncryptDelgate"} color={"medium"} content={
            <div>
              <TexttoCode code={`public Encrypt_Delegate GetEncryptDelgate(string name);`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />

          <ButtonPart title={"GetDecryptDelgate"} color={"medium"} content={
            <div>
              <TexttoCode code={`public Decrypt_Delegate GetDecryptDelgate(string name);`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />
          <br />

          <pre className="mb-4 text-red-600 text-2xl">
            Document.cs
          </pre>

          <ButtonPart title={"EnumEncrypt"} color={"medium"} content={
            <div>
              <TexttoCode code={`public IEnumerable<string> EnumEncrypt(Encrypt_Delegate encrypt);`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />

          <ButtonPart title={"IndexerEncrypt"} color={"medium"} content={
            <div>
              <TexttoCode code={`public string this[int index, Encrypt_Delegate encrypt];`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />

          <ButtonPart title={"EnumDecrypt"} color={"medium"} content={
            <div>
              <TexttoCode code={`public IEnumerable<string> EnumDecrypt(Decrypt_Delegate decrypt);`} title={"Prototype(s)"}/>
              <br />
            </div>
          } />

          <img src="https://spacefiction.fr/wp-content/uploads/2016/02/star_wars_iv_97th.gif"
               alt="Description du GIF" className="w-96 h-48 mx-auto" />

        </div>
      } />

      <ButtonPage title={"Dark Side - The Empire Strikes Back"} color={"hard"} content={
        <div className="">
          <p className="mb-4">
          In this section, we'll look at the basics of preparing to defend ourselves from the Rebels.
          </p>
          <pre className="mb-4 text-red-600 text-2xl">
            Planet.cs
          </pre>

          <ButtonPart title={"Properties"} color={"hard"} content={
            <div>
              <p className="mb-4"> We'll now create a class that will have properties for the document.</p>
              <ul className="list-disc list-inside">
                <li><span className="text-red-600">Name</span></li>
                <li><span className="text-red-600">Neighbors</span></li>
              </ul>
            </div>
          } />

          <ButtonPart title={"Constructor"} color={"hard"} content={
            <div>
              <TexttoCode code={`public Planet(string name);`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"GetEnumNeighbors"} color={"hard"} content={
            <div>
              <TexttoCode code={`public IEnumerable<(Planet, int)> GetEnumNeighbors();`} title={"Prototype(s)"}/>
            </div>
          } />

          <pre className="mb-4 text-red-600 text-2xl">
            Galaxy.cs
          </pre>

          <ButtonPart title={"Properties"} color={"hard"} content={
            <div>
              <p className="mb-4"> We'll now create a class that will have properties for the document.</p>
              <ul className="list-disc list-inside">
                <li><span className="text-red-600">Planets</span></li>
              </ul>
            </div>
          } />

          <ButtonPart title={"Constructor"} color={"hard"} content={
            <div>
              <TexttoCode code={`public Galaxy();`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"AddPlanet"} color={"hard"} content={
            <div>
              <TexttoCode code={`public void AddPlanet(Planet planet);`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"AddConnection"} color={"hard"} content={
            <div>
              <TexttoCode code={`public void AddConnection(Planet planet1, Planet planet2, int distance);`} title={"Prototype(s)"}/>
            </div>
          } />

          <ButtonPart title={"FindShortestPath"} color={"hard"} content={
            <div>
              <TexttoCode code={`public List<Planet> FindShortestPath(Planet start, Planet end);`} title={"Prototype(s)"}/>
            </div>
          } />

          <img src="https://qph.cf2.quoracdn.net/main-qimg-02b971fe4719034bc990aeb2f16e62b6"
               alt="Description du GIF" className="w-96 h-48 mx-auto" />

        </div>
      } />


    </div>

  );
}

export default App;
