const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  
  return (
    <div>
      <p>Part 1: {props.parts[0].name} && Exercises: {props.parts[0].exercises}</p>
      <p>Part 2: {props.parts[1].name} && Exercises: {props.parts[1].exercises}</p>
      <p> Part 3: {props.parts[2].name} && Exercises: {props.parts[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Total Exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }
      </p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />     
      
    </div>
  )
}

export default App