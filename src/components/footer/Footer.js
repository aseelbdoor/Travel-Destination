import './Footer.css';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <i class="fa-solid fa-location-dot"></i>
          <p>Irbid</p>
        </li>
        <li>
          <i class="fa-solid fa-phone"></i>
          <p>079########</p>
        </li>
        <li>
          <i class="fa-solid fa-envelope"></i>
          <p>aseel.bdoor2001@gmail.com</p>
        </li>
      </ul>
      <ul>
        <li>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <p>Facebook</p>
        </li>
        <li>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <p>Instagram</p>
        </li>
        <li>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          <p>linkedIn</p>
        </li>
      </ul>
      <ul>
        <li><p>&copy; Copy Right Aseel Bdoor</p></li>
      </ul>
      <ul class="news">
        <form action="" method="post">
          <h2>News</h2>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subsecribe</button>
        </form>
      </ul>
    </footer>
  );
}

export default Footer;