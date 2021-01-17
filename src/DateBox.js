import './styles/dateBox.css';

export default function DateBox({num, info}) {
    return (
        <div className="count__box">
            {num}
            <span className={"info"}> {info}</span>
        </div>
    )
}