import CarteCinema from "./CarteCinema";
import { films } from "../films";
const ListeFilm = () => {
    return (
        <div style={styles.liste}>
            {films.map((film) => (
                <CarteCinema key={film.id} poster={film.poster } title={film.titre } description={ film.description} rating={film.rating } />
            ))}
        </div>
    );
};
const styles = {
    liste: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      marginBottom: "20px",
    },
}
export default ListeFilm;
