import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <>
      <h1>eroor</h1>

      <p>{error.statusText || error.message}</p>
    </>
  );
};
