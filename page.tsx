import react from 'react';

interface StudentProps{
  name:string;
  age:number;
  rollNumber:number;
  className:string;

}
const StudentCard:React.FC<StudentProps> = ({name,age,rollNumber,className})=>{
  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 m-10 bg-blue-200 border-gray-200">
     <h2 className="text-xl font-bold mb-2">Student ID card</h2>
     <p className="text-gray-700">Name:{name}</p>
     <p className="text-gray-700">Age:{age}</p>
     <p className="text-gray-700">Roll Number:{rollNumber}</p>
     <p className="text-gray-700">Class:{className}</p>
     </div>
  )
}
  
  const Student:React.FC = () => {
    const students =[
    {name:'Omaima',age:10,rollNumber:567849,ClassName:'Four'},
    {name:'Bisma',age:20,rollNumber:897650,ClassName:'Physics'},
    {name:'Iqra',age:12,rollNumber:546479,ClassName:'Matematics'},
  ];
  return(
    <div className="flex flex-wrap justify-center">{students.map((student,index)=>(
      <StudentCard
      key={index}
      name={student.name}
      age={student.age}
      rollNumber={student.rollNumber}
      className={student.ClassName}
      />
    ))}
    </div>
  );

};
export default Student;