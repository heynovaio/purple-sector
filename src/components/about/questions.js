import * as React from "react"
import * as styles from "./questions.module.css"
import { Link } from "gatsby"

import firstAid from "../../images/first-aid-kit.jpg"
import invisible from "../../images/99invisible.jpg"
import NBT from "../../images/nothing-but-thieves.jpg"
import revisionist from "../../images/revisionist-history.jpg"

import aliveAtWork from "../../images/alive-at-work.jpg"
import escaping from "../../images/escaping-the-build-trap.jpg"
import inspired from "../../images/inspired.jpg"
import technically from "../../images/technically-wrong.jpg"

import DDD from "../../images/diners-driveins-dives.jpg"
import D2S from "../../images/drive-to-survive.jpg"
import SchittsCreek from "../../images/schitts-creek.jpg"
import TedLasso from "../../images/ted-lasso.jpg"

const Questions = () => (
  <section className={styles.questions}>
    <div className="ContentContainer">
      <div className={styles.rowWrapper}>
        <div className={styles.row}>
          <h3>What we're listening to</h3>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://music.apple.com/ca/album/ruins/1298785869"><div className={styles.card}>
              <img role="presentation" alt="" src={firstAid}/>
              <h4>Ruins — First Aid Kit (Music album)</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://99percentinvisible.org"><div className={styles.card}>
              <img role="presentation" alt="" src={invisible}/>
              <h4>99% Invisible — Roman Mars (Podcast)</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://music.apple.com/ca/album/broken-machine-deluxe/1226033753"><div className={styles.card}>
              <img role="presentation" alt="" src={NBT}/>
              <h4>Broken Machine — Nothing But Thieves (Music album)</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://www.pushkin.fm/show/revisionist-history/"><div className={styles.card}>
              <img role="presentation" alt="" src={revisionist}/>
              <h4>Revisionist History — Malcolm Gladwell  (Podcast)</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
        </div>
        <div className={styles.row}>
          <h3>What we're reading</h3>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://www.chapters.indigo.ca/en-ca/books/alive-at-work-the-neuroscience/9781633697669-item.html?ikwid=alive+at+work&ikwsec=Home&ikwidx=0#algoliaQueryId=ca832de5303c004dd9ced479bbe397d2"><div className={styles.card}>
              <img role="presentation" alt="" src={aliveAtWork}/>
              <h4>Alive at Work — Daniel M. Cable</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://www.chapters.indigo.ca/en-ca/books/escaping-the-build-trap-how/9781491973790-item.html?ikwid=escaping+the+build+trap&ikwsec=Home&ikwidx=0#algoliaQueryId=22f37524c6b23305b353478227dc1665"><div className={styles.card}>
              <img role="presentation" alt="" src={escaping}/>
              <h4>Escaping the Build Trap — Melissa Perri</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://www.chapters.indigo.ca/en-ca/books/inspired-how-to-create-tech/9781119387503-item.html?ikwid=inspired&ikwsec=Home&ikwidx=36#algoliaQueryId=84be30dd91bc9b1d2d2b7a3a094d8da8"><div className={styles.card}>
              <img role="presentation" alt="" src={inspired}/>
              <h4>Inspired — Marty Cagan</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://www.chapters.indigo.ca/en-ca/books/technically-wrong-sexist-apps-biased/9780393356045-item.html?ikwid=technically+wrong&ikwsec=Home&ikwidx=0#algoliaQueryId=dedce57c7732c218faceecb213787b42"><div className={styles.card}>
              <img role="presentation" alt="" src={technically}/>
              <h4>Technically Wrong  — Sara Wachter-Boettcher</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
        </div>
        <div className={styles.row}>
          <h3>What we're watching</h3>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://www.foodnetwork.ca/shows/diners-drive-ins-and-dives/"><div className={styles.card}>
              <img role="presentation" alt="" src={DDD}/>
              <h4>Diners, Drive-Ins, and Dives — Food TV</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://www.netflix.com/title/80204890"><div className={styles.card}>
              <img role="presentation" alt="" src={D2S}/>
              <h4>Drive to Survive — Netflix</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://www.cbc.ca/schittscreek/"><div className={styles.card}>
              <img role="presentation" alt="" src={SchittsCreek}/>
              <h4>Schitt’s Creek — CBC</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
          <div className={styles.cardOuter}>
            <Link target="_blank" to="https://tv.apple.com/ca/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy"><div className={styles.card}>
              <img role="presentation" alt="" src={TedLasso}/>
              <h4>Ted Lasso — AppleTV+</h4>
              <p>Get a copy</p>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Questions