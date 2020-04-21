import { Link } from "react-router-dom"

export default props => {

    function handleSubmit(e) {
        e.preventDefault()
        
    }

    return (
        <div>
            <p>It's a cool, October night and the ghouls are coming out to play.</p>
            <p>Scared, you run into the first door you see. You're led into a dimly-lit room.</p>
            <p>Lights flickering, the screaming and cries from the outside shred your ears.</p>

            <p>You see a table in front of you, with three items laid out: a vial of Magic Salve; fangs, which slightly remind you of a chattering teeth toy; and a pet rock by the name of Steve.</p>

            <form className="choiceHolder" onSubmit={handleSubmit} >
                <p>Which item would you like to inspect?</p>

                <Link to="/StoryOne_1">
                    <button className="vial">
                        <img src="https://loading.io/asset/362583" />
                    </button>
                </Link>

                <Link to="/StoryTwo_1">
                    <button className="teeth">
                        <img src="https://loading.io/asset/363501" />
                    </button>
                </Link>

                <Link to="/StoryThree_1">
                    <button className="rock">
                        <img src="https://cdn.clipart.email/8fbdcfbc114a9ea0d4a22546ec709f53_the-homebrewery-naturalcrit_300-300.png" />
                    </button>
                </Link>
            </form>
        </div>
    )
}