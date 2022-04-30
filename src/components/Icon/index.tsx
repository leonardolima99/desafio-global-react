type IconProps = {
  name: "add" | "delete" | "edit" | "login" | "save";
  size: number;
  color: `#${string}`;
};

export function Icon({ name, size, color }: IconProps) {
  switch (name) {
    case "add":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          height={size}
          width={size}
          viewBox="0 0 48 48"
        >
          <path d="M22.5 38V25.5H10V22.5H22.5V10H25.5V22.5H38V25.5H25.5V38Z" />
        </svg>
      );
    case "delete":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          height={size}
          width={size}
          viewBox="0 0 48 48"
        >
          <path d="M15 39H33Q33 39 33 39Q33 39 33 39V15H15V39Q15 39 15 39Q15 39 15 39ZM10.5 11V8H17.2L19.2 6H28.8L30.8 8H37.5V11ZM15 42Q13.8 42 12.9 41.1Q12 40.2 12 39V12H36V39Q36 40.2 35.1 41.1Q34.2 42 33 42ZM15 39H33Q33 39 33 39Q33 39 33 39H15Q15 39 15 39Q15 39 15 39Z" />
        </svg>
      );
    case "edit":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          height={size}
          width={size}
          viewBox="0 0 48 48"
        >
          <path d="M9 39H11.2L35.45 14.75L34.35 13.65L33.25 12.55L9 36.8ZM6 42V35.6L35.4 6.2Q36.25 5.35 37.525 5.375Q38.8 5.4 39.65 6.25L41.8 8.4Q42.65 9.25 42.65 10.5Q42.65 11.75 41.8 12.6L12.4 42ZM39.5 10.45 37.45 8.4ZM35.45 14.75 34.35 13.65 33.25 12.55 35.45 14.75Z" />
        </svg>
      );
    case "login":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          height={size}
          width={size}
          viewBox="0 0 48 48"
        >
          <path d="M20.55 32.75 18.4 30.6 23.5 25.5H6V22.5H23.4L18.3 17.4L20.45 15.25L29.25 24.05ZM24.45 42V39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H24.45V6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42Z" />
        </svg>
      );
    case "save":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          height={size}
          width={size}
          viewBox="0 0 48 48"
        >
          <path d="M42 13.85V39Q42 40.2 41.1 41.1Q40.2 42 39 42H9Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H34.15ZM39 15.2 32.8 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39H39Q39 39 39 39Q39 39 39 39ZM24 35.75Q26.15 35.75 27.675 34.225Q29.2 32.7 29.2 30.55Q29.2 28.4 27.675 26.875Q26.15 25.35 24 25.35Q21.85 25.35 20.325 26.875Q18.8 28.4 18.8 30.55Q18.8 32.7 20.325 34.225Q21.85 35.75 24 35.75ZM11.65 18.8H29.55V11.65H11.65ZM9 15.2V39Q9 39 9 39Q9 39 9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Z" />
        </svg>
      );
  }
}
