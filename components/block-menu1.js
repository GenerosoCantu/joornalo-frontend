import Link from 'next/link';

const Menu = ({ items }) => {

  return (

    <>
      <div className="row menu">
        <div className="col">

          <ul>
            {items.map((item, index) => (

              <li key={index}>
                <Link href="{item.link}"><a>{item.text}</a></Link>

                <div hidden={!item.sub} className="bg"></div>

                <ol hidden={!item.sub}>

                  {item.sub.map((sub, index0) => (
                    <li key={index0}>
                      <Link href="{sub.link}"><a>{sub.text}</a></Link>
                    </li>
                  ))}

                </ol>

              </li>

            ))}
          </ul>

        </div>
      </div>

    </>
  )
}


export default Menu;