import { PageTitle } from "../components/PageTitle/PageTitle";

export function NoPage() {
  return (
    <div>
      <PageTitle pageTitle="404 - Page not found"></PageTitle>
      <h1>404</h1>
      <h2>Siden eksistere ikke</h2>
    </div>
  );
}
