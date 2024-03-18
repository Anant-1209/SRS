import React from 'react'
import Product from './Product'
import "./Home.css";
function Home() {
  return (
    <div>
        <div className="home">
            <div className="home_container">
                <img src="https://startuppakistan.com.pk/wp-content/uploads/2021/04/c-users-dell-pictures-1_swfb1o_k1lgprn-xruzq8w-jp.jpeg" alt="" className='home_img' />


                <div className="home_row">
                    <Product 
                    id="1"
                    title="wallet 1"
                    prize={100}
                    rating = {4}
                    img="https://i.pinimg.com/736x/81/5c/dd/815cdda22867676d59a5b1a08a9c01ef.jpg"
                    /> 
                    <Product 
                    id="2"
                    title="wallet 2"
                    prize={101}
                    rating = {1}
                    img="https://i.pinimg.com/originals/15/0a/a6/150aa699710df9e36514b2ace634a5ad.jpg"
                    /> 
                </div>
                <div className="home_row">
                <Product
                id="3"
                title="wallet 3"
                prize={103}
                rating = {5}
                img="data:image/jpeg;base64,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"
                />
                <Product 
                id="4"
                title="wallet 4"
                prize={105}
                rating = {2}
                img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRYVFhUYEhgSFRgUGBkSGhISGBISGRoaGRocGhgcIy4lHB4rHxgZJjgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHhISHjQrJSs0MTQ0NjQ0NDQ0NDQ0NDQxNDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHCAH/xABIEAACAQMCAgcDBgkKBwEAAAABAgADBBESIQUxBgciQVFhcROBkRQyQlKhwSNicnN0grGyszVDU2OSosLR4fAkM1Rkg5OjFf/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA0EQEAAgAEAwQIBQUBAAAAAAAAAQIDBBExEiFBE1Fx0QUUImGBocHwMkKRseFDU3Ki8SP/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERAT5Ps0XrF4+lEJQYlxWV/aIhAZaZGlXOdmUNnsHAbG5wCDEzotWtrzw1jWW1UOLUHbCVA2+nK6iurONOvGnVnuzmZCcUvOmtOn7M21FVIoexq+1Xs1zhQv4Nd8KysRkg9tttzOtcCulq29GojM6vSQhnILN2QDqP1sg588xFonZfEwcTDiJvGmrIxESWRERAREQEREBERAREQEREBERAREQEREBERAREQERECBxbiKW9GpXqHSlJdR8SeQUeJJIA8zPP1W5r8RveWqpc1NKgbimvcPyEQZPoTNq61+kRq1RaU27FE5fHJ63gfJQfiT4TM9UXR7QjXbjtVRopZG4pA9pv1mGPRfOZz7U6PQwo9XwpxZ3nb7+fg5n0n4WbS7r2+Sy0mVlZsZZWQMPLvx6gzoXU90g+fZVDvvWpZ7x/OIPQ9r9ZvCUdaHCFqU6l6vOlWFBjnY0FXSdvrCszD4+E5zwe6ajVStTOHouHXPI45qfIjIPkTIn2ZbUrOYwOHr9XqCJB4VfpXo06ybpVQMPEZ5g+YOQfMSdNXkkREBERAREQEREBERAREQEREBERAREQEREBERATWenHSEWVszAj2lTKUx4HG7Y8FG/rgd82GpUCqWJChQSSdgABkk+U8/dN+kBvbhnBPsx+DpKdsUwfnEeLHtfAd0radIdWUwO1xOe0c58vvpqi9G+FNe3KUgSfaMWqNuStMbuxPj3ZPeRO88Uuks7R3ChVt6WEQbDIAWmo9+kTVeqfgXsqBuWXD3ONOea0By/tHLemmOnt37a5tOHrv7WqlWqP6sNsD+qKjfqiVrGldW2YvGNj8P5Y11+HOZ8k7iPDc8GqU23Y2zV38TWP4dj6lszivCLFq1UU03Zg5UfXZFZtI8zpwPMielrmgHR0PJ1ZfcwI++eZrG4ejVR17LUqiuM52dSDv8MSL9GmQva0X0311+M6/J03qn45hns3OAc1aWdsN9NP8AFj8qdTnGeltn7J7filr2UrslTAzinXPaIOPontAjxDDvE6rwTiaXNCnXTlUXOO9WGzKfMMCPdLUnpLnzdYmYxq7Tv7pjeGRiIl3GREQEREBERAREQEREBERAREQEREBERAREg8V4hTt6NSvUOlKSl2PkO4eJJwAPEiBo3Wx0kFKmLRD+EuBmpj6NDOMerEY9A3jOa9HODtd3NOiMgO2XI+gi7ufhsPMiQr2+q3dapd1Bj2rtjfIGMYRfEKpUfDxnV+qjgop0Wu3ADV8qhO2mip358tTD4KpmMxxW0evh2jL5WbxvO3j/AA6AqrTQAYRKa4HcFRR+wATlvQKt8u4pdXh3Wln2efoh8pT9PwaN7zNg60OPrRsaiU2DVLjFEBDqKo3z2IHIaQRnxYSB1UPb29kGevSSpcO1RlepTVlUHQgIJyNlzj8aazu82luGlu+eTpE81dI7Y07u4XkEr1QPydbEfYRPQf8A+7a/9TQ/9tL/ADnDun+g39dkZXSoUYMhV13Rc7jbmDKYjs9Gz/6THubl1dXKXVrXsKu4wXXx0Me1p8Cr4YH8cS70EqvZXVbh1Y/PJqUj3OwHNfJkGcdxQjnNP4TeCwvLWrkaKlKlUbB5Uqi6KoPmrBmx+Ks6h014G1emlxQ2ubUirRI/nAva0HxBxkee3ImRXbwRjWrxTH5b/K0dfP3S2yJjeB8SW5oU667CouSvejjZlPmGBHumSmrgmJidJIiIQREQEREBERAREQEREBERAREQEREC1UqBQWYhQoJJYgAAbkknkJxbrP6YU7wLb0HJoo2p2AwKzj5oUnmo3PLc48N/nWt0tatVezpkijQbFQqR+GqjmD+Kh2x9YHwE0CiAzouDucnPgN/24HvkTsvh1m9orXeZ0/Vkrq4b2VMEALRphECgKBuSQcc2JYknvJmFe5cjtOzaV21EsAByAB5CZXiNRdg2dxnPPHd/n8ZiqzDAwN8b4HOVpHLWXd6RtFcSMGu1I0+On/FoXT/WI9DifDcuD84/EwQNvtlZQHMu85Qbpz9NviRMhY1CV3JO/M7nEhooAxvknyG0yNsvh3ADwlLxyduQme3jwlGuLhkcgbA4O3fkTIWfTC+ogezuaqgcgW1qAPxHyuPdMfxAdvHioI9cYMiKmPSTXZlmeWNePfP7uodX3WDoq1EuyqJcOKmtFCpTrnZ2ZQdg+ASQMBsnAySOzo4IBBBBGQRuCDyIM8mKMHO4nWeqLpSQ3yGqxIbLW5O+jALPT8hgFh4doeAlmEy69ERCCIiAiIgIiICIiAiIgIiICIiAlm5q6EZz9BWPwGful6YTpfcmnY3bjmtvV0/lFCF+0iBwk8Ozl2bUWyTlc9onUx9ckyzb8PCsTncr9Xlv6+Alyyv2YYOnGO4SqnXOTtjNTQMZ5bbzC3aRHtPosr6ji40dhWdY5xv5rFfh4ZwCQNskkcgBt+0mU3PD104Gxx4f78pfS4JPzB2gCcHkv+pP2T5dXGM7Ds4z98mIxIjl9HPi4no+9rWtrMz/AJIQ4YuBvvjnjn7sz6vDhjGffpEpN+2M6QNtp8p37EgaRvtJ0xPvRlr6P7p/280g2g0FRzK6c4Gd4o2gXYHn5f6yite6TgAE9/OXaFwX3wBjbbMrbj05tstOU7WIwo9r4/VbuOHe0bOoAgDGRkZGTvvy3lNHhodc505P1QceR38ZerXRQ4AByud8ymhfEMOyAHIyd9mJwftk149ORjeo9rPaROvX8X0SF4Suw1b7EHSPgd5lejFgKV7bMGJIr0wNgNmbQfsYyH8tOCdI2GRn1wR7pVwbirfKaTMFASoj7DuRw5+xZGmL1Vtf0bwzFKzr0/Fv03l6IifJ9m7xiIiAiIgIiICIiAiIgIiICIiAmvdOB/wFyCM5p6f7TKPvmwzVOs1scMuTy2pj41aYidlqWitotMaxEw5JRskUAhftaUU7dSM4xnJmMsLh9hrb3kmT/aMNgf8AeZj2V+/93tU9J5aluKuHpPuiClSUZIHf+wASPWoq2rOe0cmXjUIUb7+i85A+VNgnOw5bLuZPBid7Kc1kZ/pfKvmqaxU457ACfUsVUgjO0hfLqn1vsWfVvamd2+xY4cTvV9YyX9v5R5ppsUJycknzl6nbKOWfjmY+ldvuS3IfVXnCXT6WOrfIxsPfE0vO8rVzuUpOtcOYnwr5si1qrEE58PdK0s0xjfGoNz7xIC3bgp2ts77DcZk8VGD6c7HGNlkcF46rWzuTvPFfDmZ8I82QWyTlvhsnn3nnKGtEQ6lUjGTkkmRql4+CdWMcsKu0x1Wu7EgsW9SSPhHZ4k72T6/k688PB5+FY+svTFCpqVW+sob4jMuyDwapqt6DfWo0z8UBk6bPFIiICIiAiIgIiICIiAiIgIiICar1j2j1eH1qdMandqQVcgaj7VDgE7ZOO+bVMR0lbFEfnaP8VT90DzvSpPTco6lHQ4ZW2Knzk8Nv9kj8QqlrmuxDKWrVCVfGpO23ZOCRkctj3StG2lkKaz7TH1j2QPWSmbaTOjKo15QDhSmptQqaSp7D4znbniBgVG2ZbDTtHG7K3S3qn2dFM0n0nTTXLaCRpOOfpPt3Qt0qUCy0qanWuWWmgLFVIGTtnaQauMlxjGRvvLiN2cZz6TtPGhRSng+zplmUIDoUuwdThR3nyE1PrUpgfJsDG1Xlt/RwNLUZ0zM6csp8BOu1OIUqKI9WotNWwoLnSC2M4HngGcqua7O2pjqwNIOw7I2HLyEQMfccpDsqJqVUprgNUdUXVsNTsFGSO7Jkq6MjcLraLii/PRWpt66XU/dJHo/hFApb0UJ1FKSISNslVAz9knSJwxy1Gmx5sik+pAkuVSREQEREBERAREQEREBERAREQEw3SdSaGBz1pz8mB+6Zma10+vzb2VWsBq9m1LY9+qqq48vnc/28oHCuLFvlNxqUoxr1GKkglSXJxkbHnKA+0p4reitc1qqjAqOzAc9j5ygNtLIfXMi1G2PpLzNIzttIkdE6wd7G3P46H/5PLvWL/wAq2/SF/dMi9OKgbh9DBBw1I7Ef0bS71h1gaFsQQcV1OxB+g0kS+sI9qy/SR+1JD61eVv8A+X/BJHWBWUmzIZTpuQTgg4HZmz8TuLdkfW1JiEfTramxBKnln3SNBKuLyjSpo1Z0pqwCqamAC+nOBnvwDOR0n2nWbbittoQtWo4VVzqemdJx35OxnJS2S35RO3hmBHujMcjYdT4Op+BEyF0ZjGbBz4byR6d4Kc0KX5tf2SdMN0RuDUsrVzzqUKbH9ZQZmZVJERAREQEREBERAREQEREBERATUus6gX4bcAdwpt/Zqo33TbZrHWMccNuz/Vf4lkTstXTijV51omSQ0h0jJSmWUfWMsOZcYy00B7c6NGRp1l8YX5+NOdWM8u7MVK7MFBIIpjSuyjC7bZA35DnPlM74PIzYejPAkunZGOjSmsFRqzuB3+szm+k6aOrDy3HhTi8UREb7/RgWumLhy3bXTg4UEafm8h3YEvWt0yaijFC4Ktp21KeYPlOh0+r+j/SN7lUTVukHDFt67UlOQACCwUHtKD3SLYk1jWYXy+Urj34KX5+E/wAMbb1mClAxCsQSoJwxHLI78SWjSGryUjTSOcOW8RFpiJ1Wrhpjqpk+4Mx1SWUek+hQAsLPHL5LR/hrM7MB0GOeHWR/7al+4Jn5VadyIiEEREBERAREQEREBERAREQE1nrFXPDLz8wx+BB+6bNNe6ernh17+jVD8FJ+6B5pQyQjSIhl9WkoXC0pJlLGUM0JfSZmOEcYqUDrplQXGk6gG78/dMHql22bfEyxYnTWOjtyN4jE7O3OLcvj0dvv7l0oVKinDLRZ1OAcMFJG3rOT8S4jUrMalRtTMAMgKuwGOQGOU6ffnNpU87dv4ZnIHqb+kXrxWiOictiRhYGJaPxTyjv5x9z+i9TkgNIyNL7GauBTWaQml+q0jOY1HpDoB/Jtl+j0/wB2bFNf6B/ydZfo1L9wTYJCSIiAiIgIiICIiAiIgIiICIiAmC6ajPD739Ern4U2MzsxHSqnqsrtfrWtdfjTYQPLamXA0sIdhLgMkVs0t5gz5mQPs+5lOZ9g105w3yp04DUDT9h86iU1e08RpzjT9k0hTKA22PPM+gytYnq1xbUnTgjTv33+KTTaSi0h0zJBMuyW6rSO5l1zLFbkcc8HGPGB6b6GJiwsge61ofw1mckbh9AJSpoOSIiD0VQPukmQEREBERAREQEREBERAREQEREBLdamGVlPJgVPoRgy5EDyRxCzahVqUWGGou1NvVSRn0OM++Wg0611sdBqj1GvrdTU1Ae3RclwygKHRR84aQMgb7Z3yccd1wJBaUEy2XgNAu5jVLefsn3MC6DGZbUz4zwJiNLvtZAV9pcDwJDNMl0UsDcX1rSAyHrozfm0Ot/7qtMQmSQACSSAAMkknYAAczmdr6rehL2xN3cLpq1F006Z+dRptuxfwc4Ax3AHvJADpsREBERAREQEREBERAREQEREBERAREQE570q6rLW6ZqtItaVHJZvZgPTdjzY0zjB/JI7zgmdCiB534v1T8Qo5NNUul8aThWx5o+N/IEzTr/hVxbnFahVo74/CI6AnyJGDPXMoZQRgjIOxB3BEDx3r3n0vPVN10SsKhJezt2J5n2dNWPqwAMxF51ZcMqKwFv7IsMB6T1FZD4qCSvxBEDzcr4858Ztp6RsurDhlNQpt/akDBeq9Qsx8SFIX4ATKWnQvh9IgpZ0ARyLIrkHxBbO8DzTwzhNxcHFChUrnODoVmAPPdhsvvM3zgvVDe1MGu9O1U7kZ9tUHlpXs/3p3hUAAAAAGwA2A90rgav0Y6EWliM0011O+rVw7+7bCj8kDzzNoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/2Q=="
                />
                <Product 
                id="5"
                title="wallet 5"
                prize={170}
                rating = {3}
                img="https://m.media-amazon.com/images/I/41S34BPEWLL._AC_UY1000_.jpg"
                />
                </div>
                <div className="home_row">
                <Product 
                id="6"
                title="wallet 6"
                prize={107}
                rating = {5}
                img="https://pixc.com/wp-content/uploads/2017/09/image-2_handbag-stuffed.jpg"
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home