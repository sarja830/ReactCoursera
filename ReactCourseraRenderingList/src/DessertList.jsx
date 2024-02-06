function DessertsList(props) {
    const { data } = props;
    const lowCalorieDesert = data.filter(desert => desert.calories <= 500);
    const sorted = lowCalorieDesert.sort((a, b) => {
        if (a.calories > b.calories) return 1;
        else return -1;
    })
    const listElements = sorted.map(desert => {
        const content = `${desert.name} - ${desert.calories} cal.`
        return <li>{content}</li>
    })

    return (
        <ul>
            {listElements}
        </ul>
    );
    // return null;
}

export default DessertsList;
