import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Search from "../component/search";
import Picture from "../component/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [testEffect, setTestEffect] = useState('jane')
  let [sideEffect,setSideEffect] = useState('33')
  let [testMapLoop, setTestMapLoop] = useState([])
  let [forOf, setForOf] = useState([
    { id: 1, animal: "Dog" },
    { id: 2, animal: "Bird" },
    { id: 3, animal: "Cat" },
    { id: 4, animal: "Mouse" },
    { id: 5, animal: "Horse" }
  ])

  let refTest = useRef('test')


  let [currentsearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f91700001000001050a68e048374cca85c191e81d0153ed";
  const intialURl = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentsearch}&per_page=15&page=1`;
  //data fetch from pexel
  const search = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };

  //load more picture
  const morepicture = async () => {
    let newURl;
    if (input === "") {
      newURl = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURl = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newURl, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(data.concat(parsedData.photos));
  };

  const demo = () => {
    setTestEffect('alan')
    // refTest = 'meow'
  }

  const testMap =  () => {

    let languages = [{
      time:'kk',
      name:'jj',
      score:'liz',
      quantity:'546'
    }]
    let lanKey = Object.keys(languages)
    console.log('lanKey',lanKey)

    for(let i = 0; i < lanKey.length; i++){
      console.log('languages[lanKey[i]]',languages[lanKey[i]])
      languages[lanKey[i]]= languages.map((d) => {
        return{
          one:d.time,
          two:d.name,
          three:d.score,
          four:d.quantity
        }
      })
    }

     setTestMapLoop(languages[0])
    console.log('upperLan', testMapLoop)
  }




  // useLayoutEffect(() =>{
  //   console.log('useLayoutEffect')
  // },[testEffect])

  //data fetch when page load
  useEffect(() => {
    search(intialURl);

  }, []);

  useEffect(() =>{
    // console.log('testEffect',testEffect)
    testMap();
    if(testEffect !== 'jane'){
      setSideEffect('55')
    }
  
  }, [testEffect]);


  let button = null
 
  if(testEffect === 'jane'){
    button = <div>yo jane</div>
  } else{
    button = <div>yo alan</div>
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      {/* <p>{testEffect}</p>
      <p>{sideEffect}</p>
      <button onClick={demo}>change name test</button>

      <div>
        {
        testMapLoop.map((d) =>{
          return <div>
            {d.one}<br/>
            {d.two}
          </div>
        })
        }
      </div>

      <div>
        {
          forOf.map((data, idx) =>(
            <p key={idx}>{data.animal}</p>
          ))
        }
    

      </div>
      <div>
       {button}

</div> */}
    
      <div className="Pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morepicture}>Load more</button>
      </div>
    </div>
  );
};

export default Homepage;
