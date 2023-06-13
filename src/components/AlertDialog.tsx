interface Props {
  message: string;
  code: number;
}
const ShowAlert = ({ message, code }: Props) => {
  return (
    <div className={`show_alert ${code == 1 ? "bg-sucess" : "bg-danger"}`}>
      {message}
    </div>
  );
};

export default ShowAlert;
