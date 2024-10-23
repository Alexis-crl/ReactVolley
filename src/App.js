import { useState} from "react"
import Card from "./components/Card";
import './App.css';


function App() {

  const [loader, setLoader] = useState(false)
  const [data2024, setData2024] = useState(false)
  const [data2025, setData2025] = useState()

  function HandleClick1 (){
    setLoader(true)
    setData2024(true)
    setData2025(!data2024)
  }

  function HandleClick2 (){
    setLoader(true)
    setData2024(false)
    setData2025(!data2024)
  }


  function Nav2024(){
    setData2024(true)
    setData2025(false) 
  }

  function Nav2025 () {
    setData2025(true)
    setData2024(false)
  }



  if (loader === false) {
    return (
      <div className="loaderHome">
        <div className="loaderTitle">
          <h1>Wissous Club</h1>
          <h1>2024-2025</h1>
        </div>
        <div className="loaderBtn">
          <button onClick={HandleClick1}>2024</button>
          <button onClick={HandleClick2}>2025</button>
        </div>
      </div>
    )
  }

  else{


    if(data2024 === true) {
      return (

        <div className="App">
          <nav>
            <button onClick={Nav2024}>2024</button>
            <button onClick={Nav2025}>2025</button>
          </nav>



          <main>
            <Card
              date="19 octobre 2024"
              heure = "18H30"
              equipe ="PARIS AMICALE CAMOU 3"
              pos = "Domicile"
            />
      
      
            <Card
              date="16 novembre 2024"
              heure = "19H"
              equipe ="AS VOLLEY-BALL TAVERNY SAINT-LEU 2"
              pos = "Forfait"
            />
      
      
      
      
            <Card
              date="24 novembre 2024"
              heure = "14H"
              equipe ="VOLLEY-CLUB NOGENTAIS"
              pos = "Exterieur"
            />
      
      
      
            <Card
              date="30 novembre 2024"
              heure = "21H"
              equipe ="PLESSIS-ROBINSON VOLEY-BALL 2"
              pos = "Domicile"
            />
      
      
            <Card
              date="08 decembre 2024"
              heure = "16H30"
              equipe ="PANTIN VOLLEY"
              pos = "Exterieur"
            />
      
      
            <Card
              date="14 decembre 2024"
              heure = "19H30"
              equipe ="SPORTING CLUB PARIS VOLLEY 2"
              pos = "Exterieur"
            />
          </main>
          
    
    
    
        </div>
      );
    }
    else if (data2025 === true) {
      return (
        <div className="App">
          <nav>
            <button onClick={Nav2024}>2024</button>
            <button onClick={Nav2025}>2025</button>
          </nav>



          <main>
            <Card
              date="26 janvier 2025"
              heure = "14H"
              equipe ="CLUB POPULAIRE/SPORTIF 10EME"
              pos = "Exterieur"
            />

            <Card
              date="1 fevrier 2025"
              heure = "18H30"
              equipe ="SAINT-PIERRE VOLLEY-BALL"
              pos = "Domicile"
            />

            <Card
              date="15 fevrier 2025"
              heure = "19H"
              equipe ="PARIS AMICALE CAMOU 3"
              pos = "Exterieur"
            />

            <Card
              date="16 mars 2025"
              heure = "14H"
              equipe ="AS VOLLEY-BALL TAVERNY SAINT-LEU 2"
              pos ="Forfait"
            />

            <Card
              date="22 mars 2025"
              heure = "14H"
              equipe ="VOLLEY-CLUB NOGENTAIS"
              pos = "Domicile"
            />

            <Card
              date="30 mars 2025"
              heure = "14H"
              equipe ="PLESSIS-ROBINSON VOLEY-BALL 2"
              pos = "Exterieur"
            />


            <Card
              date="12 avril 2025"
              heure = "18H30"
              equipe ="PANTIN VOLLEY"
              pos = "Domicile"
            />

            <Card
              date="04 mai 2025"
              heure = "14H"
              equipe ="SPORTING CLUB PARIS VOLLEY 2"
              pos = "Domicile"
            />

            <Card
              date="17 mai 2025"
              heure = "21H"
              equipe ="PARIS VOLLEY CLUB"
              pos = "Domicile"
            />
          </main>

          
    
    
          
        </div>
        
      )
    }
    
  }
  
}

export default App;






