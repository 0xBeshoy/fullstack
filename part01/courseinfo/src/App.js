const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.part1} />
      <Part part={props.part2} exercises={props.part2} />
      <Part part={props.part3} exercises={props.part3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} - {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part1.exercises} exercises3={part1.exercises} />
      <Total exercises1={part1.exercises} exercises2={part1.exercises} exercises3={part1.exercises} />
    </div>
  )
}

export default App;
