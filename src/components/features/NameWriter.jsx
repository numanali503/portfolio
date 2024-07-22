import Typewriter from 'typewriter-effect';

function NameWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          'Numan Ali',
          'Front-End Developer',
          'Mern Stack Developer',
          'Full Stack Developer',
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
export default NameWriter;
