
function CarteCinema(props) {
    return (
        <div style= {styles.card}>
            <img src={props.poster} alt={props.title} style={styles.image}/>
            <h3> {props.title} </h3>
            <p> {props.description} </p>
            <p> <strong>Note:</strong>  {props.rating} </p>
        </div>
    );

}

const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "16px",
      maxWidth: "300px",
      textAlign: "center",
    },
    image: {
      width: "100%",
      borderRadius: "8px",
    },
  };
  

export default CarteCinema;