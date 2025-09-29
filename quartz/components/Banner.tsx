import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Banner: QuartzComponent = ({}: QuartzComponentProps) => {
  return (
    <div class="banner" id="banner">
      <div class="banner-content">
        <div class="banner-header">
          <button class="close-button" aria-label="Close banner"></button>
        </div>
{/*        <p><strong>
        🧪 I’ve been exploring how ads work and experimenting with them on this site (non-profit, just hands-on learning). Let me know if it affects your user experience <a href="https://github.com/xy-241/CS-Notes/issues">here</a>.
        </strong></p>
        <br />*/}

        <p><span class="wave">👋🏻</span> <strong>Join My <a href="https://link.yxy.ninja/tg">Telegram channel</a></strong>!</p>
        <br />
        <p>I share real-world lessons from building scalable systems at <a href="https://www.jumptrading.com/">Jump Trading</a>, <a href="https://www.binance.com/en">Binance</a>, and running mission-critical cloud ops at <a href="https://www.govtech.sg/">GovTech</a> and <a href="https://rsaf-agile-inno-digital.defence.gov.sg/">Singapore Air Force</a>. No fluff, just practical takeaways, hard-earned fixes, and deep dives that matter.</p>
      </div>
    </div>
  )
}

Banner.css = `
.banner {
  padding: 0.85rem 1.5rem;
  text-align: center;
  font-size: 0.95rem;
  width: 100%;
  margin: 0;
  position: relative;
  transition: opacity 0.3s ease, transform 0.3s ease, margin 0.3s ease;
}

.banner-content {
  position: relative;
  background: var(--bg);
  border: 2px solid var(--secondary);
  border-radius: 12px;
  padding: 1.25rem 1.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.banner-header {
  position: absolute;
  top: 0.75rem;
  right: 0.7rem;
}

.banner.hidden {
  opacity: 0;
  transform: translateY(-100%);
  margin: 0;
  pointer-events: none;
  display: none;
}

.banner p {
  margin: 0;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  letter-spacing: 0.01em;
  color: var(--dark);
}

.banner a {
  color: var(--secondary);
  text-decoration: none;
  border-bottom: 1px solid var(--secondary);
  transition: all 0.2s ease;
  font-weight: 500;
}

.banner a:hover {
  opacity: 0.8;
  border-bottom-color: transparent;
}

.banner strong {
  font-weight: 600;
  color: var(--dark);
}

.close-button {
  background: var(--bg);
  border: 1px solid var(--secondary);
  color: var(--dark);
  font-size: 0.85rem;
  line-height: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
}

.close-button::before {
  content: "×";
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1;
  display: block;
}

.close-button:hover {
  color: var(--secondary);
  background: var(--bg);
  border-color: var(--secondary);
  transform: scale(1.05);
}

.wave {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
`

Banner.afterDOMLoaded = `
  const banner = document.getElementById('banner');
  const closeButton = banner.querySelector('.close-button');
  
  // Check if banner was previously hidden
  if (localStorage.getItem('bannerHidden') === 'true') {
    banner.classList.add('hidden');
  }
  
  closeButton.addEventListener('click', () => {
    banner.classList.add('hidden');
    localStorage.setItem('bannerHidden', 'true');
  });
`

export default (() => Banner) satisfies QuartzComponentConstructor 
