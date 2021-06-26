const CenteredMessage = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center h-screen text-primaryCopy">
    <h1>{message}</h1>
  </div>
);

export default CenteredMessage;
