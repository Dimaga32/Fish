import React from "react";
class СlassButton extends React.Component{
    constructor(props) {
        super(props);
        this.state={simb:0}
      }
       Simb(str){
        let a=0
          this.setState({simb:0})
          for(var i=0;i<str.length;i++){a++;this.setState({simb:a})}
          return this.state.simb
      }
    render(){
        return(
            <div>
                <h1>Число символов {this.state.simb}</h1>
                <input type="text" onChange={(e)=>{this.Simb(e.target.value)}}/>
            </div>
        )
    }
}
export default СlassButton
// class СlassButton extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { simb: 0 }; // Инициализация состояния
//     }
  
//     // Метод для подсчета символов
//     Simb = (str) => {
//       let simbCount = 0;
//       for (let i = 0; i < str.length; i++) {
//         simbCount++;
//       }
//       // Обновляем состояние
//       this.setState({ simb: simbCount });
//     };
  
//     render() {
//       return (
//         <div>
//           <h1>Число символов: {this.state.simb}</h1>
//           <input
//             type="text"
//             // Используем стрелочную функцию, чтобы передать значение в метод Simb
//             onChange={(e) => this.Simb(e.target.value)}
//           />
//         </div>
//       );
//     }
//   }