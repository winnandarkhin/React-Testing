import Link from 'next/link'

type Props = {
    list: string[]
}
const ListItem = ({list = []}: Props) => {

    return <div>
        <h3 className="mb-5 text-lg">List Item</h3>
        <ul>
            {
                list.map((name: string) => <li key={name}>{name}</li>)
            }
        </ul>
        <Link href="/">Home</Link>
    </div>
}

export default ListItem