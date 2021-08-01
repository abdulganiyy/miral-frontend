import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-img">
        <img
          alt="aboutus"
          src="https://www.icel.tech/wp-content/uploads/2019/09/about-us-2.png"
        />
      </div>
      <div className="about-info">
        <p>
          We are group of companies that focus on solving problems human face on
          a daily basis and meet their needs through our cutting-edge solutions.
          <br />
          We are into real estate,sales of
          vehicles,agriculture,agriculture,oil&gas and information technology
        </p>
      </div>
      <div>
        <h3 className="about-details-header">What We Do</h3>
        <div className="about-details">
          <div>
            <img
              alt="real-estate"
              src="https://www.investopedia.com/thmb/YVXbTovtjwAO40lfZWtOSfo14Wg=/2576x2576/smart/filters:no_upscale()/aerial-view-of-house-roofs-in-suburban-neighborhood-565976173-5b185a148e1b6e0036d465ef.jpg"
            />
            <p>Real Estate</p>
          </div>
          <div>
            <img
              alt="automobile"
              src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=6&m=155439315&s=612x612&w=0&h=1bPal14stPAXKODdCMHMUWCVheYPVHXl4iyHDCh2Ndk="
            />
            <p>Automobile</p>
          </div>
          <div>
            <img
              alt="agric"
              src="https://i.hurimg.com/i/hdn/75/0x0/5da6f8a50f254420341e14b8.jpg"
            />
            <p>Agriculture</p>
          </div>
          <div>
            <img
              alt="solar"
              src="https://www.build-review.com/wp-content/uploads/2021/02/solar-panels.jpg"
            />
            <p>Solar</p>
          </div>
          <div>
            <img
              alt="oil&gas"
              src="https://www.offshore-technology.com/wp-content/uploads/sites/6/2020/05/Offshore-Tech.jpg"
            />
            <p>Oil&Gas</p>
          </div>
          <div>
            <img
              alt="ict"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQSERgSERIYEhEPERARDxEREBIREhESGRQaGRgUGRgdLi4mHB4rHxkYJzomKy8xNTY1GiVIQDszPy43QzEBDAwMEA8QHxISHjErJCs1NjQ0MTQxNDQ0NDQ0NzQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0P//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQIDBAEGB//EAE0QAAIBAwEDBgoGBgcGBwAAAAECAwAEERIFITETQVFVlNIGFRYiNFRhdIG0MlJTcZPRBxQkQpGVY3JzkrHC0zNDYqGzwSM1gqKy4fD/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACURAQEAAgICAgIBBQAAAAAAAAABAhEhMRJRQWEDcfATMkKBof/aAAwDAQACEQMRAD8A+UbPsnuJVijALNk+cwRVVQWZ2Y7gqqCSTuABpodlWS7n2kCw3NyVnNImefDNpJHtxVewiVt75gcMLFFBHHS95bKw+Kkj7iaSV6+bWHvi2x6xbsEneo8W2PWLdgk71IqK3xvth74tsesW7BJ3qPFtj1i3YJO9SKinjfYe+LbHrFuwSd6jxbY9Yt2CTvUiop432Hvi2x6xbsEnervi2x6xbsEnepDUgtPG+zZ54ssesW7BJ3q6NmWPWLdgk71JQtTC01fabkcjZlj1i38vk71Hi2x6wbsEvepSFqQWmr7TczXxdZdYN/L5e9XfF1l1g38vl71ZLCzMjfRdgCqhI11SSO2QsaDfljg8xwFJwcYPpB4J3f8As/1S2WRt62z3aC5I5vN5QNn2bvuFZbr5bLv4JvF1l1g38vl71Hi6y6wbsEveqnaWzzE2GjeMhijxSqRJE4AOltwyCCCDgZGeisWmt19puWvgz8XWXWDdgl71Hi6y6wbsEvepXpoK019s856M/Ftj1g38vl71c8W2PWLfy+TvUsK1ErTV9qmX0aHZlj1i38vk71ROzLHrFuwSd6lRWoFaavtsyOPFtj1i3YJO9XPFtj1i3YJO9SUrUSKeN9qlPPFtj1i3YJO9R4tsesW7BJ3qRUU8b7ae+LbHrFuwSd6jxbY9Yt2CTvUiop432Hvi2x6xbsEneo8W2PWLdgk71IqKeN9tPfFtj1i3YJO9WfaeyeSQTRSpcW7voWaMOul8Z5N0cBkbAJGdxAOCcHCqnmxm/Y75f3eQtnx/xrdxKG+/S7j/ANRrLuc7YR0UUVbTrYno197pB89bUlpzsT0a+90g+etqTVM7oKKKKoFFFFAUCipqKMtAFTVaFWrAKOdoC1MLW/kUjJj5MSSr/tNTsqRkfSUaSMkHcWLYzwB4mQhWQ6BGI5T9DQxaOQngvnEkE8xBxnAwOInaKwBakFqQFSArXO1ssJnSNmhdklidJVeNmRwgR0Zgw37tY+DHmBr3lv4XA7NaQiNWV+TNqrW6o0hGRi2ZCXhI+kzPqzrwRgGvncTsjBlJVlOQwOCKboqG0ecxIZUuoYg2lgulopWJ0A6M5Rf3cezfU5YyqmbLf3Tyo0kzFnnkRkBLHTHGrrpXUSQoL6VG/wCg3RS3TWmV2dtTHJOPgBwAHAAcwG4VXprZEXLarTXMU02ZYcq3nHCjVjLadZVC5GrB0gKpJODzbt9Mm2KRnUluANWoh7tWAAy3nHIBA6QfupcpGyWvLkVErTLaVjyUhXOV1OoPOGVirKfaCPiCDz1i01pvSgrUStXEVsg2flOUc+axAVFdEd86gDqc4UZVgNxJ0nduzS1eN2VsKqZadHZ6sDjMbDOC88MqH2MV0leI34I6cDJCuSMqSrDDKSrA7iCDgg+3NJXScMxFcqxhVZFauUUUUUUKKKKAp1sX0W+91t/nYKS062L6Lfe62/zsFTl0EtFFFUHOxPRr73SD562pNTnYno197pB89bUmqJ3QUUUVYKKKKJSUVNRUVFXKKJyrqitNnIEkR2GVR0Zl6QrAkf8AKqVFTUVjla3XSBWKF23Y1FUUiQ4yJNWrLBs6gTzNupxbyF2BUItuVBQiKIMkhXDEc6snnOT0Jn97eljuTpCuiyKu5Q+rKDoDKQ2N53Zxv4VNpyVKoixq30wgbL8+CzEtjcN2cZA3ZrNMuUbW2pEWJFhbYJJGWvs7z7Ja6Nox+oW39++/1aXKtWKlNOXlTO4skmjM9qmho1BurUMz8mBu5eMsSzRHnBJKE78qQa5sySNo3tZm5NJnjljn3lYpkV1XWBxQh2BI3jcd+CDmtJnidZI2KOh1I68QeHxBGQQdxBINMrm1SeNri3QIyDVdWq8IxzzRDnizxXihP1cEZVS/JXd2TwyNHIuh0I1DIIwRkMCNzKRggjcQRiqNFPLSdZUW3uW0hQRa3JBJt8nPJvje0JPxQkkc4OG7s2ido5F0umMjIIwRkMCNzKRggjcQabTYu2W6qFZ20ojXKu2lm0CWAIjYG8jUpH8OmmcuzlWNpmuAFaGANJlWRlJUeaisX1ncCCoAy/1tyKNmQ5U4OCDuBBB4qQdxHsNbZVRbZJliQSPcXMbHDsoVEgZSEYlc5kfiMcN26liplwy7akDsWHCSe6nTIIPJuUCEjmzoJx0Y6aVFa1yksxZiWZjkk7yaqZa2Jt3Wdlr0Gyg36wpRlQk2vJvICyBRZzDBAIzwZdx45pEy042ZHiBpJ3dLZSyRNG5SaWYb+Si5ioJyxYFV1Ejzmw2ZdOn47ybeFDyGDEksUigyYEaOrA8keOXbm9nON9eO2oDyhz9IJCr9PKCJA+fbqDZ9ua2HaGn6HKFuYyzmRVPSEAAJHtyPZS19+8nJO8knJJ6Sa3GadLlKzMKrYVoYVSwqlY1VRXSK5RYoooooU62L6Lfe62/zsFJadbF9Fvvdbf52Cpy6CWiiiqDnYno197pB89bUmpzsT0a+90g+etqTVE7oKKKKsFSUVGpqKJqairVFRUVYorHLKpKKsUVECtEMTOcIpdsZwqljjpwKOVqIFWqtBjKnSwKsOKsCCPvBqxFoh1Fq5UoVatRaxiKpWi1leORZI2KSIdSOvEH/ALjGQQdxBOaZR+Dt4QCLSfB3j9nkH/arB4OXnqk/4D/lU7itX0purZJUa4hURlNJubcbljywUSxZ4xliBp4oWA3gjBazrIgt7htIUYtrggk2+TnQ+N5hJ+KEkjnBa7P2BdLHcA2swL2yqgMLgs36zA2kbt5wrH4GsL+Dl3g/sk/A/wC4f8qzcLL3opurV43aOQaXRirjIOCOgjcR7a0zp+xRe93v/Rtae+EGwbp7uV0tpmVnyrLC5BGkcDiqptgXZtY0FrNqW6umZeRfIVo7cKxGOBKt/dNJkXG8vJslVMtNL7Zk0GOWhki1fRMkboG9gJG+sDrVSpX2NgpQ3FyStsrFQqkCS5kAB5KPo4jU/BQeckA5Np3zTvqcBVVQkUaDEcMY4Ig5hvJzxJJJySaZ36/sVr/aX/8A8oqSutJzyq3XDOwqthVzCmkVjEinlDlw6xkaGkUSFclFVGUkjhnJGcjG7J23SsZshYVURXoLixidf/DOHMnJD/w2jUyFchGVmYgnBGQQASN28lUJpLt11pQwqFXMKqaqdMa5RRRRYp1sX0W+91t/nYKS062L6Lfe62/zsFTl0EtFFFUHOxPRr73SD562pNTnYno197pB89bUmqJ3QUUVJVJOAMknAA3knoqxEValTltZEALxugPAujKD9xNRWiMli1aoqtatWsccl9tEZHVBuLuiAngCzAZ/51qluSfMjJSIHzEBxkczPj6TnnJ+GBgDNbSFHVwMlGVwDwJUgj/Ctb2h+nGGeInzGA1FR9V8fRYe3jjIyMGiL1wusnLlYnJZXISPV5xjdjhWU8wzjI4EZ58EXJsu49Xm/Ak/KoWkLRsssilAhDxhhpaR13qFB3kZxk8AM8+AbUv5/t5fxpPzrL9I/axNmT+ry/gSflXqv0e7Jc7QRpoZAI1kkUyRsqhwMKd4xkZyPaB0V5hL6b7aT8aT869f+je5ke/UNI7ryUu5ndhnA34JrnlvVVhryj2nhd4XLZERRqJLhhq0scJGvMWxvJPMo/iN2fHj9IN6fsR90Td6lfhaxbaFwWOTypX4KoUD+AFLESomM0rP8uXldV6keH97/RfhN3qPL69/ovwm71ecVK6UrdRz/qZe3oD+kC9/ovwm71X2P6RrhXHLxpJH+8I1ZHA6VJJB+4j4ivKOlUutbqemz8mXt9f8JzHebJkeMcqrw8rDhSW1qcrgcQwIwRx4ivi77Mn9Xl/Ak/Kvo2wpWGwLjDEGP9ZCEEgruDbiOG8k/GvnT38v28n40n50w43HT8tl1b6W7Vt3jtLVZEZG5S+Ol0ZGwWi34NIXFbbmdn3vIzkcC7s+PuzWRyOmuscbyqRtLqxGQrKxHSAc4p5ZXklq/KRsNX63newCzROmcZPMysCPv9lYrDZ6yK00zGO1iYK7qAZJHxkQRA7mcj4KN7bsZ7Pt1y3mIscSqEhhQugjjBJC60Ku5yWJLHezE46F5dcOJur9r3cl4WZ2AY3ahQGDLBEqPgFhzKAxJ9hNecvJA8juBgPI7gHiAzEgH+NbbvaUki6CcLzjU7k8DgsxZsZAOnOMgbt1LmpJpe9qWqpquaqmqnTFCiiijoKdbF9Fvvdbf52CktOti+i33utv87BU5dBLRRRVBzsT0a+90g+etqTU52J6Nfe6QfPW1Jqid0FMmlMEaqnmySpykjg4dVJOlAeYFQGOOOoA8KW0x5Pl0XRvljXQ0f78igkq6j97AOkgbwFB378VRntbp4ySrEavpqfOVxzhlO5h7DTN9jzSYkt7aV4ZVDIY4pZFU8GTUAc6WDDpwBWCCwkY/QKqD5zuCiJ/WY7h/jWia/cEJFI6xxqqJpd0DY3s2kHdqYs2PbWX6Rfteuw7v1O47NN+VWLsS69TuOyzd2sa30320n4sn51dHdzsQqyyMzHCqskjEnoAB305c74/bUuxbr1S47NN+VXxbIu1OVtbhT0i3mB/iBVYW6+0ckcUWfW4+9FYsP4VUl7L9q/4j/nTlyy8Z7bhsi6JybWck8SbeYk/HFXLsi59Vn7NL+VYkvJftX/Ef86vS7k+0f8AEf8AOnKOG1Nk3Hq03Z5fyr136O7CaO/VpIZEXkpRqeJ0XOBuyRXjEupPtH/vv+dew/RvOzbQUM7MOSl3M7EcBzGueW9VWGvKMHhQP2+4/t3rdabNtmsHuWaflY25IqDFyZkYZUjdnRvXO/PHFYvCf0+4/t2ptZQOdkSkI++5RwdDYKBRlx0qMHJ4bjU3qM1vK/7cj2RBBCkl48muddcUEAXWE5mctuGej/HfjQNi2kkYkhmkOqe3i5J9CumuQKxOBv3NkEbtxznmv27bNdLDdQIZEMCROsYLNE65ypUb8ed/y9opfcbJMVvy8xMTl1WCIrh3+sSOKgbt/s9oqdlmrrXH85aZ9jWKpcOWusWUixSAG2yzM+gFN3DPTikHhFs9IJQkRZkeGKVTKULjUucHSAKe7PtpH2bdkI7mRrUoRGzGTTL5xX62N+ccK8lM5O8kncACSTu5hVYsy1qcdvceDsrR7CuHQgMrTlSVVgDpXmbIPxrwz7duPtE7La9yvc+D4U7DuA7FULT6mVQ5UaV3hcjP3ZFeEe3tfWZewp/q0x1uume9TXpU+37j7ROy2vcql/CG5+0Tstp3Kse3tPWpuwJ/q1S9vaetTdgj/wBWuk16Ru+y/aW0JZyplk16AVRQqIiAnJ0ogCjJ4nG/dS9hTlraz9bm/l8f+rUFsbV20JeOrvkIZ7NYotePNDuJG0gndq0kDO/AyRW4a3eyNqqNa7u3eJ2jkQpJGxV0YYZWHMfz56ytWukVNVLVc1UtWuuKFFFFFinWxfRb73W3+dgpLTrYvot97rb/ADsFTl0oloooqg52J6Nfe6QfPW1Jqc7E9GvvdIPnrak1RO6CiiirFrzM2NTM2kYXUxbA6BnhUlqlatWiMly0wVjHCCu5p2dWYceTUKNIPMCxbPTpHNxXLW+3ZXTk2YIVcvG7Z05YKGVjzZ0qQeAIOdxyJrjVanHDdjeMcxp3Ds2W6RZY0DNqaOYtLFGWdQp1+ewySrrkjiQSd5pauz33FtKqf32kTQfuYHzvuXJqVxIp0om9IwQGIwXcnLPjmzuA9ijnp+nOzXZsng7c/Zp2q179XJsC5+zXtNt36QoB0VoQDopynj0eLsG4+zXtNt369b+j7Zk0d+ryIAvJSjIlhc5IHMrE189THRXs/wBGX/mK/wBjN/gK55b1VYa8ozeFB/b7j+3aqYtoTBOTE0gjwV5MSuE0niunOMHJ3Y560eGdu0e0ZgwxrcSofrIyg5Hx1D71NKEesk4Tn/dTW0vZIsmORoyfpaHZc/fjjXLi6Z21O7O3DU7s7Y6MmsAeul6aRy2rtKZBpSeVFGcKs0iKMnJ80HHOaWua6z1U70ka+g+DsTSbCuURSzs1wFUcSdK7hXhX2Bd+rP8A3a9zsq3ZPB6dnGOVS4kUH6hwoPx05+4ivl7qOgfwFMPl2z1qfoxbwevPVZP7tKr+zkhfRNG0blQ4V10kqSRqHSMgj4Gq3UdA/gK2WV8uj9Xucm3ZiyOo1PaueMiDnU4GpODAczAGunLnxShqpat20rJoH0Phgyho3Q6o5Yz9GRG51OD7QQQcEEVhaqNcmtvcpcotvcuEljUJZ3TnCoo4W8x+z+q37n9X6Ka8tnido5EKSRsVdGGGVhzf/fPUWptbXSXUa21y4SSNQlnducKg/dt5z9l9V/3P6p83OnfHkhaqWpuNiT8qYWQpKrmPQVdnZwASqIgZmIBB80EYIOcEZsv/AAaniALRuuvOhZIZImcjiE1DSx/4Q2r2U8o6SUhoooqnQU62L6Lfe62/zsFJadbF9Fvvdbf52Cpy6CWiiiqDnYno197pB89bUmpzsT0a+90g+etqTVE7oKKKKsFWKarqxTRNXLVimqVNWqaxxyi5asU1SpqxTRyyjSpq5DWVDVyNRDWjV6PwI2qltfJJKdMZDxu/1Aw3MfZkDPsJ6K8ujVarVNm2y6u4+9bb2dZX6LysiEqMxTRSpqUHoO8EHoORXmPIK35r8Y5siM/96+YrjoH8KmCOgfwrnMLOq6X8mNu7H01fAKDfi/BA3nzU3DON/ndJrvkHB6+P4R96vCbPI/V7rd/uYPm4aWuRg7hwPNTxvtlyxn+P/X0t/AGAHBvgCOIKoCP/AHVosfAWzQh5rrllB3JqSONiMHBwSTxG4Eca8B4TEfrk27/ef5RVE5H6lFuHpd5zf0VrWeN9t8sZbw+qeHe2beKwkhV0LzR8lFFGykgHAzgcFA+G4Cvi7tQTVTtV44+MTnl5XbjNWdzU3aqWauiDHa3o9p7tP87cUnY022sf2az92n+duKTsayOlnKDGq2qTGq2NavGPo3g1K3J6w+uQRJboriWRmgjt4ZUVdHnKupm80H9/BzgCtXIBYuQOI4pVtlYOk7kgJaJlWKgLpDkggbmOSdxrxmwPCM23msARhVYOrNHIqtqRXCkMCrb1dScYAKsAMbL7wnjWAwQIixuEWRI2mkMoEaoFaRwuldKqpCrqIGNQyTXGy7eiV5nau+UtjBdIpH/rvGrsfZ5zHdzViq2eVncu5yzEsx4bz7KqrtOgU62L6Lfe62/zsFJadbF9Fvvdbf52Csy6aS0UUVQc7E9GvvdIPnrak1OdiejX3ukHz1tSaondBRRRVgqSmo0UZVymrVNZ1NWqaxyyi9TVimqVNTU0crF6mrFauQWruuoLhM41uyRoT0BmIBPsqUsDx41rgN9FgQyN06WG4/A0RcasVquVqyK1WK9EtSvVgesoemOzbMOrSzMY7WIhXcAF3cjIhiB3M5HwUbzuxnKSbbbDItLpzuR0giRjuDSfrEcmhelgiMxA4Ab+IpW77j9x/wAKt2htEzMuFEcUYKQQoSUiQnJGTvZid7Od7H4AY3fcfuNZIU88J3/bZv6/+UVRO37FF73e/wDRtKPClv26f+0/yrVUuTYIQMrHeXQkI36dcNvo1dGrQ+OnSeis+Iq91hZ6pZqiz1Bmq0uu1X28I062UOTqKI76E0qQGdzkHTk4ABGSDv3YOJjTGFlMYZnKBI2hZlTWyOZTIjEAjAIYgHpQ+ysqsZutNzb3WhBPApixycAZY4BhmZ9Mbrgkksx/eG/eDSS7jCkFSWR1DxscAlSSMEdIYMp9q9FelvvCHlkiSS5crCytLiE5ndWyrNv3YGN2/J39AHnL/wA0JHxaJCH3YIZnZtJ6CAVyOY5HNWTbtqMbGqmNSY1UxqlYxFjUK6TXK11goooo0U62L6Lfe62/zsFJadbF9Fvvdbf52Cpy6CWiiiqDnYno197pB89bUmpzsT0a+90g+etqTVE7oKKKKsFFFFB0GrFNVVJTRNjQprVYxh5EQnCuyhiOIXPnY9uM1hVqvgmKOrr9JGV1zvGVORn+FZXOx9DuvBIXNrBJAQLlooWId9MbLIsDCNc7kCi6iVcY+i5OSwqU3gmsFkuWLSySQCU6jybLKUVdIOACvLQMG475ATjFKrDb0jvaoHAtbaWJnQOBLoR8qjqTlwqnSCv0giahlQFyHb062q280iuyOrRgOHfKhimtlyulXd3wcsW0581RXLWXSrrtUvg7c/Vj7bZ9+pjweufqR9ss+/SFakDXTl57J6egi2I0Z5S7dIoEGXMc9vNLIeaONFY5Y9J80DJJ3YOXaO0TMygKI4ogUt4EJKRJnJGTvZid7Od7HjzYWA0aqa9pt+I0aq1pGq4Vl1yOoYJr0IildQLEYJJXfgEYBG8k4C0tTKRh+s6yfMkDOhY6QUdTgZ9n0fvB6KVkjRfXHLyGSZVikmYkSI5MerAHnqS2Bw3gjGeBrNZ3z20jeaCCGjnhcZSRM+dG46MjiN4IBBBAo2mqF1SBAAzsEjWVZjlggA1jiSc1m2jIGlcqcjVjUN4cgAFviQT8ayK57bdpWShBcWxLWzMFIY5ktpDv5GTH3HS3BgOYggKS1b9jXTRuWUryegi5WQFonhJAKso3tk6cY3htJBGMi2a2g150SQo7nkFnuFDlDw3BCNwI3syg9PHDeuFeG+YUlq7FOyHUpwSCp4EMp4qQdzD2HdVl5bmMjiVbUBqUo6suNSOp+i4yMjfxG8g1jJqiY6aztBxvUIjfXSKNHHNkMBlT7VxWEmgmq2amnSTYY1WxoY1DNa6SCiiiixRRRQFOti+i33utv87BSWnWxfRb73W3+dgqcugloooqg52J6Nfe6QfPW1Jqd7AUvDeRrvd7IMi87CO5hlfHSQiO33KaSVE7oKKKKsFFFFAUUUUE1NSVqqqQaiLF4NTDVnDVMNWIuK8NUg1UhqkGoi4rg1dzVIau6qJ8V2qtEV2QuhlWRASQjhvNJ4lWUhlzjgDg89YdVd1UNNrXmARGix6gQWXUzlSMEamJ05yQdOMjccisuqq9VBNG6NdnzqkTk6sh4zrQBnjyrqHAOOBbGcjBcc+Kd20UTwFhqzJBOpkcRazkKzu+TvJcM2pjhc41DIrycNwY21LjgVZWGVdTxVhzg/8A7BAq83yYAKy6QCoRbo8mFJBZVBUkKSAcZPDjU2OmPS26nDQALq0o8SRtJgO+hJC50jOMB4l48AvwVlqsubkuRkBVUaURAQiDjgZyeOSSSSec1nLVUjbN11mqDNXC1QzWqkGaKKKNFFFFFCiiigKdbF9Fvvdbf52CktPdkIVsb123K8dtboTu1Sm4SXSOk6InPwqcugioooqhba3LxOskTlJI2DI6HDKw4EGnXlKTvks7OR/3na10Mx6SEKrn7gKKKnUrEfKNer7Ps8nfo8o16vs+zyd+iip1AeUa9X2fZ5O/R5Rr1fZ9nk79FFNQHlGvV9n2eTv0eUa9X2fZ5O/RRTUB5Rr1fZ/gSd+jyjXq+z/Ak79FFb4wHlGvV9n+BJ366PCNfULPs8nfrtFNQro8Il9Qs+zyd+u+UK+oWfZ5O/RRW6ibXfKBfULLs8nfo8fr6hZdnk79doppm6PKBfULPs8nfo8oF9Qs+zyd+iimmbHj4eoWXZ5O/XPKBfULLs8nfrtFNN3UfKFfULPs8nfrnlCvqFn2eTv0UU0SuHwiX1Cz7PJ36j5Rr1fZ9nk79FFZqLg8o16vs/wJO/R5Rr1fZ/gSd+iinjAeUa9X2fZ5O/R5Rr1fZ9nk79FFZqA8o16vs+zyd+jyjXq+z7PJ36KKagPKNer7Ps8nfo8o16vs+zyd+iimoDyjXq+z7PJ36x7U2rJcaVfSkceeShhjWKGPVxKou7UcDLHJOBk7qKK2SBdRRRVtf//Z"
            />
            <p>ICT</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
