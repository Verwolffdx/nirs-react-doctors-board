import React, { useDebugValue } from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = { 
      data: [],
      ID: undefined,
      Name: undefined,
      Surname: undefined,
      Patronimic: undefined,
      DoctID: [],
      DoctName: [],
      element1: undefined,
      element2: undefined,
      element3: undefined,
      element4: undefined,
      count: 0
     };
  }

   componentDidMount() {
    fetch('/api/WorkerBoard/GetWorkersSchedule',{
          crossDomain:true,
            method: "POST",
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer',
            headers: new Headers({
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
                'Access-Control-Allow-Origin': '*'
            }),
            body:  JSON.stringify({
                "GUID": "009bac39-d16d-4473-a0dc-7f8e73c9370d",
                "Data": { "BoardID": "1" }
            }),
        })
        .then(response => response.json())
        .then(response => {
          this.setState({data: response})
          console.log(this.state.data)
        })
        .catch(error => console.error(error))
        var i = 0;
        
    this.func(i)   
  }
  
  func(i) {
    
    setTimeout(() => {
      let docElem = [];
      let doc = []
        if(i>=this.state.data.length) {
          i = 0;
        }
        else {
          docElem = []
          doc = []

          var name = this.state.data[i].Name;
          var surname = this.state.data[i].Surname;
          var patronimic = this.state.data[i].Patronimic;

          let dName = [];
          for (var j = 0; j < this.state.data[i].Doctors.length; j++){
              dName.push(this.state.data[i].Doctors[j].DoctName); 
              dName.push(<br/>);}
            
          let dId = [];
          for (var j = 0; j < this.state.data[i].Doctors.length; j++)
              dId.push(this.state.data[i].Doctors[j].DoctID); 
                
          docElem.push(<div className="specialty">{dName}</div>);
          docElem.push(<div className="fio">{surname} {name} {patronimic}</div>);

          let shedule = [];
              if (this.state.data[i].Shedule.length!=0){
                for (var j = 0; j < Math.min(7, this.state.data[i].Shedule.length); j++)
                    shedule.push(this.state.data[i].Shedule[j]);
    
                var optionsDay = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var optionsTime = {hour: '2-digit', minute: '2-digit'};
    
                docElem.push(shedule.map((item) => 
                  <div className="day">
                      {(new Intl.DateTimeFormat('ru' ,optionsDay).format(new Date(item.Date)))}<br/>
                      С {(new Intl.DateTimeFormat('ru' ,optionsTime).format(new Date(item.BeginTime)))}<br/>
                      До {(new Intl.DateTimeFormat('ru' ,optionsTime).format(new Date(item.EndTime)))}
                  </div>));
              }
              else {
                shedule.push(<div className="day notwork">Не работает</div>)
                docElem.push(shedule)
              }

          // docElem.push(shedule);

          doc.push(<div className="doctor">{docElem}</div>);

          const element = 
                    <div >
                        {doc.map((item1) => 
                        <div>
                            {item1}
                        </div>)}
                        <hr></hr>
                    </div>;

          this.setState({
            element1: element,
            element2: '',
            element3: '',
            element4: ''
          })
          i=i+1;
        }
        if((i)>=this.state.data.length){
          i = 0;
        }
        else {
          docElem = []
          doc = []
          var name = this.state.data[i].Name;
          var surname = this.state.data[i].Surname;
          var patronimic = this.state.data[i].Patronimic;

          let dName = [];
          for (var j = 0; j < this.state.data[i].Doctors.length; j++){
              dName.push(this.state.data[i].Doctors[j].DoctName); 
              dName.push(<br/>);}
            
          let dId = [];
          for (var j = 0; j < this.state.data[i].Doctors.length; j++)
              dId.push(this.state.data[i].Doctors[j].DoctID); 
                        
          docElem.push(<div className="specialty">{dName}</div>);
          docElem.push(<div className="fio">{surname} {name} {patronimic}</div>);

          let shedule = [];
              if (this.state.data[i].Shedule.length!=0){
                for (var j = 0; j < Math.min(7, this.state.data[i].Shedule.length); j++)
                    shedule.push(this.state.data[i].Shedule[j]);
    
                var optionsDay = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var optionsTime = {hour: '2-digit', minute: '2-digit'};
    
                docElem.push(shedule.map((item) => 
                  <div className="day">
                      {(new Intl.DateTimeFormat('ru' ,optionsDay).format(new Date(item.Date)))}<br/>
                      С {(new Intl.DateTimeFormat('ru' ,optionsTime).format(new Date(item.BeginTime)))}<br/>
                      До {(new Intl.DateTimeFormat('ru' ,optionsTime).format(new Date(item.EndTime)))}
                  </div>));
              }
              else {
                shedule.push(<div className="day notwork">Не работает</div>)
                docElem.push(shedule)
              }

          // docElem.push(shedule);

          doc.push(<div className="doctor">{docElem}</div>);

          const element = 
                    <div >
                        {doc.map((item1) => 
                        <div>
                            {item1}
                        </div>)}
                        <hr></hr>
                    </div>;
          this.setState({
            element2: element,
            element3: '',
            element4: ''
          })
          i=i+1;
        }

        if((i)>=this.state.data.length){
          i = 0;
        }
        else {
          docElem = []
          doc = []
          var name = this.state.data[i].Name;
          var surname = this.state.data[i].Surname;
          var patronimic = this.state.data[i].Patronimic;

          let dName = [];
          for (var j = 0; j < this.state.data[i].Doctors.length; j++){
              dName.push(this.state.data[i].Doctors[j].DoctName); 
              dName.push(<br/>);}
            
          let dId = [];
          for (var j = 0; j < this.state.data[i].Doctors.length; j++)
              dId.push(this.state.data[i].Doctors[j].DoctID); 
                
          docElem.push(<div className="specialty">{dName}</div>);
          docElem.push(<div className="fio">{surname} {name} {patronimic}</div>);

          let shedule = [];
              if (this.state.data[i].Shedule.length!=0){
                for (var j = 0; j < Math.min(7, this.state.data[i].Shedule.length); j++)
                    shedule.push(this.state.data[i].Shedule[j]);
    
                var optionsDay = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var optionsTime = {hour: '2-digit', minute: '2-digit'};
    
                docElem.push(shedule.map((item) => 
                  <div className="day">
                      {(new Intl.DateTimeFormat('ru' ,optionsDay).format(new Date(item.Date)))}<br/>
                      С {(new Intl.DateTimeFormat('ru' ,optionsTime).format(new Date(item.BeginTime)))}<br/>
                      До {(new Intl.DateTimeFormat('ru' ,optionsTime).format(new Date(item.EndTime)))}
                  </div>));
              }
              else {
                shedule.push(<div className="day notwork">Не работает</div>)
                docElem.push(shedule)
              }

          // docElem.push(shedule);

          doc.push(<div className="doctor">{docElem}</div>);

          const element = 
                    <div >
                        {doc.map((item1) => 
                        <div>
                            {item1}
                        </div>)}
                        <hr></hr>
                    </div>;
          this.setState({
            element3: element,
            element4: ''
          })
          i=i+1;
        }

        if((i)>=this.state.data.length){
          i = 0;
        }
        else {
          docElem = []
          doc = []
          var name = this.state.data[i].Name;
          var surname = this.state.data[i].Surname;
          var patronimic = this.state.data[i].Patronimic;

          let dName = [];
          for (var j = 0; j < this.state.data[i].Doctors.length; j++){
              dName.push(this.state.data[i].Doctors[j].DoctName); 
              dName.push(<br/>);}
            
          let dId = [];
          for (var j = 0; j < this.state.data[i].Doctors.length; j++)
              dId.push(this.state.data[i].Doctors[j].DoctID); 
                        
          docElem.push(<div className="specialty">{dName}</div>);
          docElem.push(<div className="fio">{surname} {name} {patronimic}</div>);

          let shedule = [];
              if (this.state.data[i].Shedule.length!=0){
                for (var j = 0; j < Math.min(7, this.state.data[i].Shedule.length); j++)
                    shedule.push(this.state.data[i].Shedule[j]);
    
                var optionsDay = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var optionsTime = {hour: '2-digit', minute: '2-digit'};
    
                docElem.push(shedule.map((item) => 
                  <div className="day">
                      {(new Intl.DateTimeFormat('ru' ,optionsDay).format(new Date(item.Date)))}<br/>
                      С {(new Intl.DateTimeFormat('ru' ,optionsTime).format(new Date(item.BeginTime)))}<br/>
                      До {(new Intl.DateTimeFormat('ru' ,optionsTime).format(new Date(item.EndTime)))}
                  </div>));
              }
              else {
                shedule.push(<div className="day notwork">Не работает</div>)
                docElem.push(shedule)
              }

          // docElem.push(shedule);

          doc.push(<div className="doctor">{docElem}</div>);

          const element = 
                    <div >
                        {doc.map((item1) => 
                        <div>
                            {item1}
                        </div>)}
                        <hr></hr>
                    </div>;
          this.setState({
            element4: element
          })
          i=i+1;
        }
         
      this.func(i)
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.element1}
        {this.state.element2}
        {this.state.element3}
        {this.state.element4}
      </div>
    )
  }
}

export default App;
