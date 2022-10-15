import styles from "./main.module.css"

const Header=()=> {
  return (
      <div style={{position:"sticky",top:0 ,zIndex:10}}>
        <header className={styles.head}>
              <p>Home</p>
              <p>About</p>
              <div>
                    <input type="text"/>
                    <button>Search</button>
              </div>
        </header>
    </div>
  );
}

export default Header;