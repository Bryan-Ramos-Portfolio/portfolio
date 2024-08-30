import Cycle from "./Cycle";

const technologies = [
    "/python.png",
    "/html.png",
    "/css.png",
    "/go.png",
    "/react.png",
    "/ts.png",
    "/sql.png",
    "/dbt.png",
    "/fivetran.png",
    "/node.png",
    "/next.js.png",
    "/flask.png",
    "/snowflake.png",
    "/js.png"
  ];


function TechSection() {
  return (
    <Cycle imgs={technologies} />
  )
}

export default TechSection