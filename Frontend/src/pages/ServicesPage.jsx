import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Stethoscope, Activity, FlaskRound as Flask, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PlaneTakeoff = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-plane"
    {...props}
  >
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const ServiceCard = ({ title, description, icon: Icon, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: PlaneTakeoff,
      title: t('services.droneSpray.title'),
      description: t('services.droneSpray.description'),
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Tractor,
      title: t('services.machineryStorage.title'),
      description: t('services.machineryStorage.description'),
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Stethoscope,
      title: t('services.veterinaryHelp.title'),
      description: t('services.veterinaryHelp.description'),
      image: 'https://t3.ftcdn.net/jpg/01/16/61/60/240_F_116616035_u3T0YpkbTG1R6v50PZTibhILZX51AWqu.jpg'
    },
    {
      icon: Activity,
      title: t('services.livestockDisease.title'),
      description: t('services.livestockDisease.description'),
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Flask,
      title: t('services.expert.title'),
      description: t('services.expert.description'),
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMVFhUWGBoaGBgYGBgXFxkYFxUXGBYYGhYYHSggGBolGxUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABCEAACAQIEAwUFBQUHAwUAAAABAhEAAwQSITEFQVEGEyJhcTKBkaGxFELB0fAjUmJy4QckQ4KSsvEVFjNTY6LC0v/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EAC0RAAICAgIBBAAFAwUAAAAAAAABAhEDIRIxUQQTIkEUMmFxgZHB8AUzQqHR/9oADAMBAAIRAxEAPwDqSpWmLxaWgC5AmuX4z+0G6cpUALznfzrO1fFLuKt2yitkBBkdaPuprRPizptvito/eHxrMPxiy75FYE+RriicOv5Cwz6bnxAehol2PxYttnLQQYid6HueQ8TteWsiqvCMat1AwO4q/FNYyNAKjxF9Lal3YKo3JMCsxeLS2CWYADWuK9uO2rYjEFEYi0ikKvUnd2HWNhyiklKh4q2dgw3FrT+y2nUyAR1ExI89qA8U7f4a02RAbp6oyx8Sa4pf4m7pq7ZVUE+I7sAQN9YBFRX1DwymGI2mASNT8R9OVT5SopxjZ37g3aq3ePiHdjcSZHoxA0Py86ZVM6jUV82cH4hiLRGVxlgyp0MERrE12Dsh2gY207xpRti0B11iDGhGx2HP0pVkcXUv6jSxpq4/0HSthUOIxSIJYjafdWuFx9txKsDVzOWqyh2O4oLewJHlU3Dset1ZBrjrLlZVTimOWzbNxthSrgO2RZzmWEJ06x511pAsda9qLDXg6hlMg1LXBPRXtYKyiAyl7jPaUW2KWwGYb66A9PM0W4riWt22dVzEDb9cqR0wgaWut4mMnXQT0NRyydVEeKsIWe0F4xmYCTyG1HMPxlQvjJJ69aDYTArYbOSWSNzrHnNDsRiBdvlbIkAa8h5msl5IbuylRY6WeKWm5x61dBoDwjhqlD3g8XTpRnCuhWEIgaaeVa8UpNXInJJdEprKysqwh5XlemvK4J5XtZWUDjKyva8rjj5WZwPSjGG7TsAlvKpjTTnQAeIQKYLHA7dtVuTrWXko9gVsY7/HHGGNoW4LTLTpBO8daVrAtodW1ozfxCvayg60PscIRbbOxkio85NfIYM8G7TvY0Qgz1mi9ntjiSdWQe4/nXLxioOnWiNjFGAZqrjNLTFTTHHj/Erty1cYudFMDlJ0H1rk1+8Q2adxJ94iKdOKcQ/urkbyo+p+oFJdvAO6ly0DlpO3OJEDanx2o3Iok3pGovkjLy/oB9BW9rFwAOkx6ER+JqlctMpIOh/W3lU+AwzOw0267VR9HK7odLN62bNvw+JXAJ6oQcw9JiinA+JrZdgzfs30IgSCNp6EciOlArC5UybirHC+BPiGaHyKFJJOuykgH4VBtNUzWotbR05sQzKpnvCwMQPDI5+X9aX7+PuW2yAlSDQ/hWExOHuAObRQabMdDEwBuaIcTw6m4cr5tteZ0G45VGLrsTPVINWO0NzuspQFojNP1FUuGcTuW3DBog7cj5UHZrqjrVB8c066VVcpdMzWjpWO7SW7yZCIneaSOK4gK+VTp5UM+0sa8tYVmMmnt/8AJnfsdH7Idq7SWhbumCOfKKdsJjbdxQyMCD0riaYMgaGifC8fdtCFYgeVBZ6O4nYQayuc8N7V3Q4k5lG46+/rTlhePWH+/lPRtKrHNGQHFl/EsApnaDSTjuHo1uWJEaxOnwrztPxtjdAtksg36H86XuLcVa8VUDKo89TU8mWL0hoocMP2kw/dZCdhEfhFCuDXbdlzcEAMTp5TSviIUaVpbx5iDUJZJNWOkkP2L4yrOMrQOcGr/wBtsqgysBBBOU6784rn2HBI0NGeH24EmprPJMNJnRFxCGCGGvmKp4njNi2Ya4oPTc/AVz7iNyOdCu+rdHK2roTgdM/7nw0+03+k1Fe7VWBsGb3R9aQbCsdRtVi5hW5GpSztOrHWJDie11uP/G/y/OqV3tvEfsdefi+mlJOIxpQ5Tyqpi8aCJ50VLJ5A4xQ7P2/adLKx5sfyrK5k2OM1lP8APyT0KnCz4xRjieeBrpQkOts+db4rik89qVq3aJJ0ibClwYzUxLhjcsEA8qV8Ne2PWmrCYmbMLuanksdCVcTKxXpU9h+VR8TssLsbsToBqSTsAOZmnPhnYJxct/aL1rKRmNtS5chYlZygDUgEg7TFbIxckqI9C7iATYgT4rijy0U5vqKjbB5kKq0FRt8Y+tGu1GC7i7kRMtn/AA9Sw1Mt4m1zT18qBOfFPONPxqORNOjfhS42QcUwYYrHL6URtWAiDbzqoCZk0Sw1wbQCOhqbf0UildnmHxVsHUjXzH4032sVYXBXWVIYqokaGTciJ29nMdvu0m3OE2S3hB6wSconyopx8lMlseG3ktsE2AbuwGMczObXzopHZZuMS0vGwV1J9DuPfzE/hVL/AKk2YttJoJccireAWdWpuCRhcmxo4di8250q5d4baua0tG7Gi0TwDtpvrUXCtoKZmJwZtGRqKrvjzypg44oFiecUi3L1UxrmtnS0MOD4jrrR/CW84051z+3iKPYHijKBrQyYvtBjIPLgnR53FFrgGWTVfh2OzpJohbxFvLrWTIm2VQExmKIEAVStXY1NHDirLEqYqv3CEwIilT49o4oM2YVrguH5jJqbF5bZFUrvFMrCDVdyWjrD9pApAq8bwiKCYHiCvudagv8AEyHPSpQxy5BtDEbtnLDRQm/YQt4YiocPi1uAgnXlW9mzGhOnKrVKPZx7jceLQyiNaqYPirExQjipOfeajwGMhxTe1oHIO8Q4a1w51O9UMTwoBJbf1qTE8XKxlOgoXxTjmcRXRWXS+gNoi+yrWUPXip6VlXqYloT7waZNag9aZ+McEZVkA0APD7v7hpseWMl2RaLGHv6Ud4HiyWC8qB4HhtydVMV0rsR2ViL99dD7CHn/ABMOnQc96DjzfGIbrZX4L2Qe5iUxTaW0OYT95h7MDfKDqT5aU2Y3AM8Zokao43UnmDzHUHQ0fUTpP66aVWazkOUmUY6T91jynoeXQ/LbCHCNC3bFHE2lxNt7V0QynKw5q42YeXMHmDXNeM4e5h7mRxqDvyZTsRXTuPq1vEh0WT3f7QDd1DQCBzZdfdpVbjfC7WLsDxAHdH8+nWDzFGcPdjf2v+xsc3jdfTOeWLgIzH2ambEH/CE+n5E70z8N7G22m2c4adxHP+ETI51JwzsY1nEDvQj2gfEAxB05aa715uRqG5aN912wVwjg9+TeuZgjLKqIlidJO4AgHbyrzjeHuuVYg+FAg56Ak6+csflXR7ly2ogKABsANB5AUJxDi5ICn4VmXq7eloz5JOWr0c4wuHLEirF0FPDTBb7O3BcLideVe43s9dczFX96LfZKhYsXjOmtNHC7mZl8qi4d2Uu5tdqYeH9nWtvmO1Jkzx6TGjE045aNy3lX6UmYrgl0cifdXYbWGWNqjKW/3anD1LhoZwv7OTYLglw6lT8KJjg7xGU/CuiF0Gy1hcfu1T8Z+h3BCtg+G37dvyrz/pmJZZEU3XZZI2rMECixvUPxMu0NxQjHs7iW1OlZiHfDJ4pjrT3cvMdAKHcS4ULy5WGlBZ3LU+g1XQhYTFfaLgt5t6v2+y5N7IXJBGlGMP2Mt22DroRzo3b4aFYOW1GlUlnSfwAo32D8L2SCD2jXmP7PqqE6k0x6xvUT2iRB1qPv5L7H4oUeB8O1OdTHKruJwQY5R9aPLYjlUbIB0rpZpt2co0IeO4RdFwCJTnRqx2YtQDsfWj9zzioWnlFGXqMklrRyigdc7N2jvUH/AG1ZUbCimYjnVfEZo0NJ7mTyGl4BJ4HY6CsogLTVlN7k/IK/QEhswAKzS32ux/copVOfpRvB4ksxHSpcTw63dA7zaRMb6mPxq+LHOMlfRCmCewufEHv7iRbBhFOudhuT/ANvM6cjXSLBkjMZLHTz8x0HSg+FweRAttQqgBVjQKo5D9dav27k3lB01PwAMV7WPGoLRCUrLlvFLngNBnVWGU+Y6TVi8+U5GEq3Xn5VX4hhFu6ggONjyPkfzrTAlnDWXnMgzL1gbjzjf407ORS4+gi3fgg2nCuZmUeFJPmJB88p6VX4fwe59oVQoIaWkSoAzQ+XeCG3EfeFMotKXGYeC8hV+kqd/wD5E1JiLJs3UvA88r9JMDNHIHwn/ikUnF6GcU+wNwLAf3thc0IZhG4kaLvuNvlVni+AFu6QNFIzAdJ3HuIIozjbYN61eWNSQ0fvRp/tA91Vu2rAIjDVgC0DfJpmPoGZf9VYf9RxLNjT+1/jKR72B1srW6W0HKg9jigq0mOBrw/YorQTDL0rZLg6UNucQt20N264RF3J1JPQCgx/tBwWaIux10FGOHwiscMpbQ4hvKvGc9KHYPGpfXvLFzMnOfaU9D+dWrtwheU+sfE8qqsQji4umX8MZXWlfjfanCWGK587c1TWPVth9aW+OcevYgtZRglldHZDOc9AfvD4edKmJwakgBo9d9PWrxwKUrZZYqVsecN27w2cfsrkEwSWHxAj0+NNuAx1rEIHtNIgGNjB2riFzA5WjMAQdjRTAXMRZi5bLDKZ8JPzU7jeq5cEWtaDGCa6OzZNIr3JpQLst2mTFrEZbijUciObCPpRfEOTpWFpxdMlJcXRuHis+0LzIqrcwvLNUN3ADqaCQtltMYrEgHaoeJKXQqsg8jUeFRAYG9Wi4OgqkouLOTB/BHdFy3GkjnV9san71Vjg5NVMZhFBETQXyYW2X7mK00NDsbYuuPC0VGcMwIAOlX0uZYHWjTXQL8lFsHcMZm2qfC3fFlJq5faBNAOOq+9vQ7zVceJzWw3TC2NIQiedRd6I0oWcRdKqbnUURJWknjroLe9FJ+9k1lXM4ryl2LQv4TD5XLHnVrGPCT0K/wC4H8Kt8R4Z3N+5aUm4ARrEbiYNUuKkraOZcokAbb6xWvEp+6uTJyTcW6CuFvlgnQE+/LM/AiK2S+i3rZ5ZoaejeE6++qnZ6TaRuoZvezE//b51JxS0YJ6V7S6MgaxOENtiBtyrVbxS5buHWDB81OhHwJq1wu59ow6k+2og+cVUu4YwaIwYxmgg7o4g9QwKz81q7hmF1MjffEf5hqPiPpQ7EKXw63Oa5Q3+RgQf9I+VZwy8NmMA8+hB0P661NrRQs2AVYTsSM3qDv74n31N2ktBbPfmR3AcmOdsrF1Y5+EEjzVapWeJ27ytdtupUESdpJ0mDsCVGnUxR/iDKbDyMwKtp1BBMe8VOatUH6OeNhbSgsxEDny9R5Vtwy9YvSLRDRvQntsLZw393LG1bCySGHgZmAXMdGC+BRzhTO1Buzym0vfWH2HiSvMfp+D7NeCPNWwp294e9zDRbHsMGYc4gjTqa5SyFTzIPXeuuXe1IuWLlxLeZ0HiXrS4+BsNaF7uv/MoaNCFnfKDpr+udKpuHaNEE639C32e7R3MJcDI2h3G4I9OdP8Ab7eWbwPd23DBZdj7C+YG58hXOONcIjxWiH/hG/Xbce+iHB7KW8I/i/aswLrzVYYID6wT76q1CSsTbdMvNjRGVQQg2Eg89SRGpPioZiWdiYIAIglZDR6zp7q0tueW5/IT+NW2swp5kaEcxpz+VUikjpNsgwrxoWLAfvNPwmacOyuHF093p4pBHSASTPXn7qRlePXz+tNfYy8bd5H5TB8wdDP9aWavsaMmtIzsXwYnHOpcobZLDKQpnNliYMgnSK6ffwzAiRSJ2y42mCxDC0RmN1mAHIEIQp8g+Y+6gfGP7UcQ5AtqLcDfUsT110HwqE8Usm0JNQfbOqXWAIkgeprbMK+fsTx6/cYu912Y7yTR/s124v2WAuE3LfNTvHkeRqcvTTS0BQg13s6z9m8Wat1swSayxfW4iXUMpcGZT5dD5irCgRNS5v7ItU6ZWbMFNQ4hZUE71dfpWly3IiuWSNgKl1NRWX1EL61vcHyrS8m07ESCNiOoNMpqgGuNfwmqqPmbXpVi4ARFRIoUz0FdGWqsJV4qsKv8wqjxRWVkYbTrRHiHjAA6zUd633ilTyoxkkkcbC3WVltSABWVMJa7c27lq8LwYm3dOhBiGA1Ux5bUt8SQ3MPcJMkRv/MIpx7YYQiyLB1/aG4p5wBA+tKGIRjbZTzUz5xr+FapUs+vJvhcvTO/DLfZBy9kLuRp5xmP5CjeJwbAafCkbht97drMphkc/AgH8a6FwnGC9bDc4E17UJWqPDaKXZvG5LkbTynf+tMXGcFlIuJ7L/I9KEjh6MxkQwOhGhorhOL5iMOQGt+yxJ1nqPQ0XaDFEWGv5bV1Tsy/OYH1qnb6eZ+Yq/xG13aETuwAPURmn6UPw/41yGDPBOB4c2jCAmGBEaamTpznSesCiq2w1oKIUQB/p0A+GlCeD4ko0cjRG/YJYIvsFsx9DEj4j51NrYyZxP8AtVwr2cZbtKYtLbzINd3Zs09fEpI6SaXF4k9nxIfaEMK7R297HW8aVuteNm4qZFkZkMEmGG8yx1B9xrifHOCX8NdNq6hkayssjKdmVhuuh+BBg1jmpct9GzHKPGl2N/Yu1avBmJynZhyNOJ4XaCC2AMo2iNPSuY9l+8Rsotls4iIPypp4Xgr9m6Lly6LafuO2Y6mBoNvfWPPgc7aexskptJRDnDezVm0zuQGYiFMCVB3/AF+dKPbDD2bTslpdSiA7AaFmM9ZzD0in18ZHQjqNR/T30hdvHBxCBd3RZ9zMKzYHLlUjsMnzakLXDcLJPOP1+hVriWg109PXX8anCBIUczv6/wDFZj8OCNZ2/DWvUT0M1vQrX8ScwGgHU6A68qacHisRh3wzW8jBjLNpC7RAM678uXKhK2bcmQDpzrTAYi73i2l2Jgf80s5JbBGLejXiVrEYrG3b1tGvKHzsVHhCsxaNdjE6eRrbtDwrxLcIZVjWFJ2POBXUuw+DRMKyqBIbM5/eLKDr/lyiidviNl8T9mZBqvQb9PnWf8S7+KKP06+2cQbB2Cgyv4tdYMARzmPKPfU/Cez1/EMotId9XIOUee2o3ruWE7K4FmLdxbDg6+EfGi5waBcgAUeQ2NB+odaQOCjoD8LsC1YtWdP2aAGNs0eKPKanuOKGY6/3bMh0K/qaqpjgTBNY3f2YpTt7DAuCSahGNQmA6z6iub9t+1pVzh7bQF0cjmf3fQfX0qLs3xGyyxec67N0q6w/Hky+LEpds6icAGIZoyDUg65j0gbjf1o7jltYi0Mvha3tmhZHTfbTSuaLjsIgj7SYPIA1NbxeFbZy/rP41VZahw46LfhYv7GDEAgbEeoiqOMvKNJ1NEeF8fWAj6p0gH45hWuOv4G6xBsnbR7cg/6VB+Yip/h+W0zPkwyToHWcUmg3jetLognLsevKocTw9VM2by3J5ey46Sv5V4rPGvwpHHjok4yXaJdetZVYMf3Zr2luPk6xu7VeJbN6N1IPqNfmJ+FLN7KysOqmPeKJdnO1VvGWltXBkzyAmXxKwBMg+6lG5jMrlehNbM8aycj0fTvlj4srp7LAiDpPnuJ+dWuE8VeyxA26VDj3AcAc9/f/AFqADn00+dendM8ahowXacG4DcEKdyBsdIJ6jSjeERUZbocRuCFz5hzEyB+VIVhgCQwmdo/rTDwB20tgEJOaDqdvlPSni2+w9Dp2iwjuLdxPEirsJzSxmY58qHYayRoQQeh0NE7GMZEALkACAPKrvC8XavkeHxJ13MfWj0g9lGxZIg0Swt0wddifcDy+leHElS2sgaxUwuhlDCNRM8j60Hs4rYu+wYKGGuvx0094NDeLcaFqFDeM7FpIHUnr5dT76KMbZ+6s+gpM7e5BZF5FylWAaOatoPgY+Jqc4um0Ug4uSTKmL4gpOc3IbmVC6+sRHx91AOP3sLdtzcuXVJkBvCI8piD75NBn4hz9x1j9axUr8cxCJlHdKp1Gb9E1mRutJaKFniQteCxdvPvLXII2AAAEFtY8voHn/pWGv3Dcc3WuIotsilQFKyxHMz4oJH7unmr4FHutZxF5g6hiV8PhU2zmBDHcyvzNTYK4llnvrc8dzRl5DKza+pmlai3YvK/4Df8A25ZckpnQ8swLL79NKXu1XCmtKO8fwmcptsCrEaET1HQ1f4piMXfs/wB3vrbymXkw2WOU6b0Y7K8DW7hGsXf2gB7yZ1Dc2B5EyfnXNKrOTOSliTlUHMNNeYo12WwxF2W5HT1O30NEb/E0764htoLVpCsDYMra+pkL8aGYN27m5eGmRDEcnbwWx7pJrLlk5KjRjioux+7CY4NnX9/OR6L4U+Itil7G8Sy8RRxyYD3QAfxq12McWr9scktop8y2gHzJ99Uu3PCms4kuBpnkecwfrNTxJcmPk6R0kY/JeB5NE++iWKxEefWPqPPnSXcxguW8O4PtLp1lYmPOJ09aMNjjkE+0B8xWfJcUiigpM97SWBdt94PbQakfeTr+NLOLxlu1b7xxLTlRep6nypowt9WWB7LDT37iuY9sAwxFq1qYDGOstA/20+JuT4v9zFmwR9xPz/YSuKXM1y4TuWY/Ek1nC+H3rhAXMF6wST/KOf0orZwCLLvDGdSfYHkB/iN8vrV1MVcbQSiHZR7TAc2PT5dBXp+5SpCLH8rZawvBBOa622yKZgDbMw29BVw3WBi2sdNPpUFrOYEjyA9kfmfM1Z/6jbsW2ut4wDGv32//ACP1yqDf8mlR/gsrje7Wbl0DyXxN8dq8TtfkBySB5mTJ59Jodb7fBtHw1pl2gqNqrcUwNnEIb2E8LDV7M8uZSfpTRVP5KhZ7XxdhbB8aRyZAzt94mNtfy1pw4bjEuju7zDNHhuqf945jziuccK4PbCq1++FLbIurHyqDFdp7ys6zpquXKFgDQQPun0pssORGLVVLo6Pfwd5GK7xzGxrK4/c4tcJku3xrKzP0EWRccf6jl2UxxtYjvRLugJGbRQSCNuehrzit+Hk7sJ+VUOEYpUcMToRBr3jzglSGE6iOo8utUlbkrNmJxUHQQt3c6K3l8wSDW63dQDsT86p8EIOHEmCWbeflpUt+zpMzW9flR5U/zMabNhbMMwkcxzjyq3g+Jw4e0uYTseh6xSlgy4EqGYREEz/xV3h+IZHDGy8cwDofprTxyp9C8Rze61whm5eoArbD47u2lGhqBPxV3hRYIHrr8x9KxUPNSB5ofqRVOXgI/wCGxJurmYjXTSqtqEJBMDpSpbulBpdyj+aPgKksYlif2Zdj1JkfFhTcgUNzYxREZvUR+JpQ41euYixctWlZrjAZFjKWIYEQT6V7xrFPh8PcuklmiAPNtND6T8KXez/HbveF2XKV2gyNRGo3mCedCWSMU0zo45NpoFYvgeOtqWvYdgFBJzNbkAbn2poFbdLrAG2APTM3z29a6Hx3HXsQhRW0umHOpIXoJ6wopAuYG7aJ7xSviIBPP066Via8Gzkxy4Sqvhblm6W7i2yk3EPjsEmFuGR4rUEgk6ruZGqp95DbmLhI3BIE/CKaODsVtM67ZCG6MoHjDDmCs+8A8qSsTcIJXaOVR5bHjG21Zcu37ygQAwP+WfhTH2b/ALRFspcsXEIBU6zJBVTHvnT30J4feF+ybTkhl2IPTalniXeI+RyDty0I2HyowldxfYkk0ytieIRmRGJDGWJEMTM6++jvD+KTh/s8+0yknqxYQo9BrPUmlS4BJjSrGCvFWUjcEEe4z+FVyY04ghkaZ0azfFvEoJ1Z9PRYU+gA1/yUz/2kMrIQdwFIO2sDT5/OuVcc4jkxKEH2FXz/AIm9fET6xTt2n4ut7DqwM5wpA5gKFUz7wfgayLG4qL8m33FJyXgzszcN3DFFP7S0/eJrvE5l96k++jfGsYVW23JvoRpXPuC41rDJcB0ZoPp4qaOMYprtmyf/AHBt0Kk/r1qXqIW0v1K4Miqw1gMSVtrB0gn0igPaXi1lxcLKZOiEe0SPunyk0Ux2Isq6WgMgVfEw1PL2hz91J3G+G3TnxIZHtAwChkheekaHeZp4YlGVsjkyqVAxSSczEEjadVUdPP0q5afSSYHzPr+VR4/A5b2RTKwCoPmNzRPD4azbIa8QfL+nOrNCKRBbu5tFEAmJ5knkKYuP8AQYNbbNBDZnI0H8oJ5AfjSre4sDiLZtL4VYACNzI5da6Dj7ee2VOsj51SENWTnPdHI8euHDZUZjHMaioeF4827qlSdxz86l4rhGsXjpsZ/pQ+9b/aCPZYgj38qskmSk3FnQMX2ptW8otWbYvH2mKgzzkTtqaS8Xca7dd3+8ZJqDiGJm4zbR4RW+Ekgmk9tQ2gvI56ZKuFEV7WzHy+dZQ2GkXreEuNdCIJM6aiCPeal48jpkDqVOp16etV8LZzju233Q9D09KzG8RuIe5MMIAKsJE76dD6UrinJMSM6g0M3Z/ClsNaAGsufjcb8Iqe4eWRpBgjTSrHZ5D9mQroQgIHMTr9a0xFl7jd4J13jkedXyNqjN3Z5fUqMykjTlVPDcavq2pkbbfA0RG2U1q/DgeW/41PHB/QURp2rvjQhf9M/jVix2kzmLl24PJFAqDB8PUggrqpykny2+UVIMKoaABI1irfM7QZwuNwoMkOT1YT+NGLHHsONBp8vwpaTDEgR11+OtW8NYGXamjN9HcS/2hxCXrcKesCQZJ25eXzoZYwaokDfn1qCCst0BPymozxAHY1DO7Zpw6RmMu3EE2oY7QTEedVMS74i33VyM/Jo9nzFXMNaW+2Qsbbf+pusfxDkfMUyW+GLaVc1ouh/xFIb3yP6VBZLfGhpCr2ZulMLi1eMyCI5w0ofl9aSeOtlvsRzAPy1+ldwwXBUi+1sKe8tGJAOZl1AYEa++uScR7q7+0uWwpUeNlkCMzwcgMDRdhElgK5rjImsnyX7C8McUHhOpPy0/rVztCoZUfnFSWF4e0T3qfFh796u8VweHdUW3e8Q0UH73lHWulJRktHZJvkKX2ZimeNBz8q0wx8Q9ab8DwN+6ZBcttMyAQcubkdd96WbvDrtoy6MAPvbr8RpVoZVJyj4Ei9kHErma4xo1wXFK1hkdjKyV0Jjw6DyH5mgjYZzDQYYwDR/hGFADiPumjkaUaKRbTs9ulHw1sLJcPH+Uj2vjy86c8HHdW0IJABPoVAE/EmlfhuBYEEDUiB5CQZ+VNpw7WSgPK34vUzPzNZclNpFYydMX+K4hrl2467GPkP18TWvY5Lg7xlErorA7a7kjYnaiXeWrNi5PPn60C7NcWuWXvgkFSuo5eRHnE1RVJdCWH+01ywx7m0iJfQT3gYEOY9k+74aUmrcd5ZydNNeXURXvDLLMxL6Bj75Jo32hwq2rip5S3m59r9edCckmo/Yyka9meDs7reQ6JcXMDvHWn28daVOzl1lsXGt+2zBV9TAFNgtg89ufnzrsOXk3Hw6JSdsS+2ltZUlZLTr0A/Heln7IsoOh+tNHbRy9xEUgoBoQJknfWgLKq3VB6iqP82iietgPiljKx8yT86ktMVUDrVziqq7tHI/jQu67EwBtVU7RPplxbprKsWEGUVlLoNsv2sNcR1Eqx5qpkqP4uQq1i+HC8WZCDdXUoDDOg3EjUe6qy23gqhIHXmfOqtqyyNmEyDv6edQjJ8rIttKh84MYs2wQF8C6CYEKNNdd5qRmKHTY7++veEXUu2VbZioj4bGrR8J8Qq2TJ0iaTTspW2cowMM2y5hPoetQWuKm2IvqVI2I1DeQ8/I0Rt4i20qfA0wHA08pHKsbhwLftlzQPDOqEHcjlJ0qsGvrTHlZBg7ryTcTL3mqLu0gRBjTMRGg6Va4fwZkzNcP7S4ZPkOQHoKjTBmy6ujSinNlMkDQg5W9DtR+7iVdhB1Ck/GI/Gm5VKmdVorW8LlEAaRXly3CmiPdyq+kn41WxK6aU+NqWwPoA8Us5bF1jvkbTn7JpTwi5xKsdOv0p2v2C6uHIGYEE+RHKhGIwlpxCEZFMHWI/P8AW9Yc8qlQ/JrSBa41l8ME+m9NPZrGEAkFgRuDII9RSVxLCXl8ZYrbBKkKY5kAyKO2cRnshSSHKwtwkmSJlSTqDGu9Ti+O0Msi6Y5cN7S5b4UroeYGx2mBvSh/aRwNcP3mX2b7K6DmqwxIJ/m1+FFezWFAIdczkDxZtSD/AAxv9a87eg3bYbeGUAeoj6mlnl5V+4jkk7Rze3w+2uHt4gtPtAodjcmEH8u7H+XzrS9h2tot8iHYRb5EElwbhGwICkL5kNyEsWCwqIBhraB3zF3uEZirMNra7Agc/wA6l4rwXEOts3FW2stOdwDA/wDGo3JgGOulWcneist0wX2VYhSw6wR8aFnH3cPeLW2gEmUYZkOuzIdDR3gmA7vvYuBihEwrAT0qu3Cxc8VwhTmaEBBc66T+6KlBpZZM6MVYc4JgcNi0D2rYtPbYPcsz4CDoWtzsP4f0Y8FgrT4i4qi4qeIZisruNtqrcJxQsXQVULBAOpJiY3Pr0pi4jgSuJNwTke2W8gREx8qGadJjNpEbi3bXwa6DUDUAxy9Km4xJto5Uy6AxsdzzoObbMEUaSw18h+oqftJxcjKTsfAPcYnX0NJCO7GU/i0QYjgiYlO7s3Ajkao/McyrczHKhl/hdvDWZae8YEMD1DFR8qIYFG+0W2AnICZ840q72owtvEWIzRiLdtXjlcXUH/MKrybnw/QkmI+BV7l5FXQ5gR0EGZPWmPE2bV8vbUu10HNPJo9qOlAuCsbSu8S7DKvkDuaYuA31w4Fxcpd/CQdSAd4oNPnfjQVZf4Xhu6TLE65lPr+PKs4vjMlvIJlpGnzqZLuVwhHh18XT+tVO1fFbdi34AC+0/uz086SMlBUu2xU92LV69cOVRooMD41vavFHEgPLRrQy1xA/sjBbM2vxq+gJZWOkO0j0Bqsnx2w89EXHrFvMWt6R7Q8+dU+GcKuOxIXTkTprVmyM10H7rEz+FXbHFcisrey7ZR5fqKfk06FlKgPe4XiVYju206bVlF345iUOUNIGxI1ispuaByKN66zLMkke4ETFWrFnO+ZW9kkkRsZiNayspIoVh7h92CFGny1HWjdxs6wd6yspcvaZxUVgja7c/wDjnVyzfJbIDEDNl3UqeY6elZWVvitCvsKBQTDLodN+vSqnC7WZ3DfdhfgKysqMt5F/nkZMNMdANgBWl5Z0rKymw6gcQ8UwQOGvMdghn3ggR8z7qUbGHRbckfDnO1ZWVkzbkg/ZNeVMQCCuUSsx68qzwOPshEMrhrbiZgbhuoisrKkpPlxFYVwN7u7JWdZY7fu6b9ZFarfN6wSd2n4zoaysrLkk1/D/APRBX4ziPsyZ7OhB8R576xPurbBu14jOxZlLHMxkxI/UVlZWiCrCpfbLroJYbCBTey+HvJ8yx/D6UA4dw9boZrfgu23Mgeyw3n3ivayjjfyY8GXsfYAuZQNZWSfMgae8043i3dhTrCx5H3e6vayhN2kdMB4sqjqenLlsZihHH7yui3DbBy7Ak6axy/WlZWU8fo76DnC39kZVEjWPStuN4FJsOpOZw3wGn415WVmk2pya8f3FYAfABFCnmxY+g0AqygGYOUVYHLoPxrKyrQk3Cxvo0TifeEyI/d8vOqvFrAuqUPtZZB5abVlZVXFKOiUtIXMJcbMlhYDKqkHzB1ovxCEsk6lizyfPavKyhlW4Cx6B3CLugHMaVR42CAqjlJ99eVlXX+4PLsvYW5mRSdyKysrKVpWZmf/Z'
    },
    {
      icon: TrendingUp,
      title: t('services.cropPrices.title'),
      description: t('services.cropPrices.description'),
      image: 'https://cdn.dribbble.com/users/3593/screenshots/2475280/linechart.gif'
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-green-100"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;