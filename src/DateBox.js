import './styles/dateBox.css';

export default function DateBox({num, info, deley}) {
    return (
        <div className="count__box" data-aos="flip-up"   data-aos-delay={deley}>
            {num}
            <span className={"info"}> {info}</span>
        </div>
    )
}