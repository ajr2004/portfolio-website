import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin, Globe, Database, Camera, Palette } from 'lucide-react';
import './index.css';
import profileImage from './assests/profile.png'; 
import { Card, CardContent, Typography } from '@mui/material';
const EducationCard = ({ logo, institution, course, score, period }) => {
  return (
<div className="bg-gray-900 text-white rounded-lg shadow-lg flex flex-col w-full md:w-1/2">
      <div className="bg-white p-4 rounded-t-lg">
        <img 
          src={logo}
          alt={`${institution} logo`} 
          className="w-full h-32 object-contain"
        />
      </div>
      <div className="p-6">
        <p className="text-lg italic mb-2">{course}</p>
        <p className="text-lg italic mb-2" >{institution}</p>
        <p className="text-lg mb-2">{score}</p>
        <p className="text-xl font-bold">{period}</p>
      </div>
    </div>
  );
};
const Portfolio = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["Web Developer", "UI/UX designer", "AI Enthusiast"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBetweenWords = 2000;

  useEffect(() => {
    let timeout;

    const animateText = () => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        if (displayText !== currentWord) {
          // Still typing
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          timeout = setTimeout(animateText, typingSpeed);
        } else {
          // Finished typing, wait before deleting
          timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        if (displayText === '') {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          // Still deleting
          setDisplayText(displayText.substring(0, displayText.length - 1));
          timeout = setTimeout(animateText, deletingSpeed);
        }
      }
    };

    timeout = setTimeout(animateText, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting]);

  
  const educationData = [
    {
      logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUWFRgWFhcYFR0dHxwZHR0YHR8gIB0dHSghIRomIBgXIjEtJSktLi8wGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAIcAtAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQEEBgMHAv/EAEEQAAIBAgQDBQUGBAQFBQAAAAECAwARBBIhMQUTQQYiUWFxFDJCgZEjUmJygsEzkqGxQ7Lh8DRTY9HxFiR0s8L/xAAbAQACAwEBAQAAAAAAAAAAAAAABQMEBgIBB//EADYRAAEDAgMFBgUDBAMAAAAAAAEAAgMEERIhMQVBUWFxBhOBscHwIpGh0eEUI/FCUmKSFRYk/9oADAMBAAIRAxEAPwD3GiiihCKKKKEIooqL0IU1BNJ+NcfhwuUSEs7/AMOJBmkc/hUa28zYDqay/GeI8QkjaQ2w0Yt9lEwaUj8ctiFHlGCfxVXnqoYADK4C+nE+HroumRuebNWx4lxaDDrmnmjiHTOwF/QHU/Kk7dtcO38GLEzjxjw7Zf5nyr/Ws9wZMMjpfD5JX2kk+0cnXUuxLAGxtc60x4/KFju8joMwFx6HS9xb69BSKftBaQRxx66En0bfzVoUZvYnP5q2e1GI+Hh036poFP0zmgdqMT8XDprfhlhb+mcUj9uOR+S07KqrqyMWUlrG2YXNluxHlXIYqVmVYZp2Zr+/AALWJDXKWAuBp51x/wAzV/2s8cX14KYUA4+foFpk7ZwL/GhxUHnJh2I/mjzD+tN+G8Yw+IGaCaOUfgYEj1G4+YrJYfHzoqLKgMrZrBSBcC17dM2pNvAeNdeK8KwrgyyxLdRfmKCsgA1NnSzf1r1naLC4NljyO9pv9D91C+lI0K3ANTWCwWNxcFuROMZHa/KmdRKF8VlHvb7OP1Vo+C9oIcTmVSySp78Mi5ZE9V6jzFwfGn1PVw1DbxOvxGhHUa+iqvY5hs5OqKgGpqyuUUUUUIRRRRQhFFFFCEUUUUIRRRUGhCgtWY45x9+YcLhArTgfaO2qQA7FvvSHog16mwrp2n4u6FcLhiPaJQTmOoij2MjDrroo6t5A0inhXDwrBCCXkLDMWsSxF3kd981tSR5AUp2ltIU1o485HaDcBxPoN/gp4Ye8I4L6wMSQGUqHnnsvMkZl5khOtrnZQCNBZQDa1RPjOdG/eMa3KFveCOp1FxoVI0uPMaVU4dw/nhD3OUrk5lzZpSNL5ic2Qm/U5reFdsTxZY//AG+DjRmTusdooz4Erqz/AIV9SRWYbDLVVGBgMkl8zw5m+Q6ZW05G9I6OnF7+/uo4XhENp5Js6xHukry0W17G7ata+hJsNbV2m7U4bUIWmP8A0oy4+baJ/Wk+IwBkOed2nbpn9xfyxjuj53PnTTD4dEQPKCQXAsN8psNB61pv+rQMZ39dKctGtsAPG2fOwCXyV75nWjHzXE9qW+HBzH1kiH/6JqP/AFawPewcvykjJ+lxTLCyQh5Iwn2iDu6XBVtj5EedcziY3kjhkS+jhjbU2PdO25Gun7VyNmbC07t3XGb+dkf+vl0sk0faCB5c0ztEodXXmqwtYWsCAU1uQTm2NaTFKZ4hyZQLkEOpzC3hdTsfI0ixvC1ZDJFcZSQy+X+96V8P4aUBlhZ4XJ0MegP5k91h6ip5+y1NVRiehlsRoHWI8vNcnaUkbwJm6J3A0uHJlmUAWWO4K5WbMAHGl0H3r6VJgaaTJOOXMimSGeLusgvbQm4I12Oh1BFcsHx8E8jGqgzd1ZALRPfoQfcY+BuD0PSuvFcEuHTuoWhKlZszsSqae7c6KLkm2ugrLzwVFJPgmbgk3EaHob/TfpluZxyx1Lcs7+/BPuCcedZFw2MsJW/hTKLJOB4D4ZR1T5i421INef4aAYlJYpjmRXyqwtmBABV1detiCDYEG9OezXF5CzYTEtmnjXMr2sJor2DgdGGzgbHUaEVpNm7SFReJ+UjdefMeo3KhNF3blqKKKKbKBFFFFCEUUUUIRRRRQhFL+McRTDQyTSaJGpY23PgB5k2A8yKvmsf2mk5+Lhwo9yIe1TDxIJWFfTNmf9AqGeZsMbpH6NF/fl4rpoubJXEzwRPiJhfFYhgWHgx0SMfgjXT5MetRwXCJKJOZJ7R3gCrKe61jfQ7E316aDSmPFOHcyzq1pEB5ZOoDaakdbgW9CaqcaxjwQqqlfaJbRoQume12e3goBP0FYJkslbJhYbySO+XDwA4EJpjbDFkvjHYzmM8ETZI4hlmkXQ5iBaFLbPtmPwjbWvpcHGqWiAQILFALAeY8QfE61X4ZFHGgisSmgJv3ib3LX6tcknxJq/EMqsDcnmFSfwi2X63rfUlBJs6ZkUVsBHxHeXe9AlLpWTROc7VUgtzTHi8ThIOXmJBU5bd05DdrnpoauMEysBYlAulrWv512xOMhTDmWaTIqLYt5Hpbq2lgN6sVr/1EWmQK8hb3UmfBZfC4oidy5yhwGLlSGse6gKnW5IYb7C9K+L4lxi0EWZ2UWNlN7jVhbYkC9jtTvgnEmll5vuRsDHGj+/lj6tfZyW0HhVLjUkhfMGK+zASDMQOZ3rMum1wdNelKxDC2WwGW8K4C58ZLdbZJ1wCBi0gYWDBnVcumVrAXbxPUDaqJisCqkXXusvXrr6U57NcUgmiLxM4KLlaN9GQG9rgdDbRutV8Zw2KQZiQjN7jBrEn08KbUD2QGxyBKoVcTnm28apVjuEB4e9Y3B7trgjz8qX9nOMGJlw05zRNZYnbXI3SNyfhOyk7e6dxT7BPkCu72Cx5TcXvdtbfQVk+LBJWfTuNcW8v+9XJqFm1IpIJxkCcLt4I4HzVfH+nLXMO7MJ9JB7LNEocrFlIXwzBmYqQLDMwIA/KaXSPiWZZQ15FkzQORYLJquTyR8rRsD1KNTHszixiYWgntI8VlYke+muR/JtLHzXzp4mAjEfKCDJ92/nffe99a+Yy1D9n1JZK39xhsTxAzv4/VaNsrJYtL3HvxTzgnE0xMEc6XCut7HdSNGU+akEHzFMqx3Z2TkY2aD4MQpxMflICFmHz7j/Nq2Arb08zZomyt0cL/AI8DklThY2U0UUVMuUUUUUIRRRRQhfLVhOEzB3xeLJAEmIdVJ/5UI5Y+VxIf1VtcdNkjd/uqzfQE/tXn/CuHc3hkcN8pkw6knzfvm/zNIe0UobStYTbE4A9BmfRWaVoMmeicYHiUM4JikVwDY2OxrPYyTm4uVt1hAgT8xAeQ/Uov6TXXsf2cfCM7yOrFrCy3tYevX+1UeBsTCrneUvKfV2Zv7EVx2Toov18ssZu1jQAebvwCutsYGfBGbjimCg00jyswQ3DSKrqemZRYj+1U4UzaCmEWCU2V3AIDKpzbE63t8q2e0H2AIIBByul1IBiIcDYhdQHV8pTuSizNtZh5+m3pSHtVhmDLrmXDqZF03kb47HfIv0LGmuHxbRplcBw72N2Fh5+Nr+FUO2vFIYMNK7P3+WyrY9TpYVnJal+bG/1EZc+Svy0uO4cc7WuOHFVMJJlhD5ge9cgXuOYubX5rf51W4pGBh5XL+/KkRvtZRmIHkNPnekXZiWVsKzSBu/HGwNm1AJGw6a3q5xQFcNErlvflaQgE22vpt1qEMs6510Timpo4S0NdkCPla9l27NEJLEQ1jOzxBfBWUlbnYXZQRfbXxrZYVGjaKIi7KCS1rix6W+g+tK+yQjkjDga+8FsLKdAN/iFh86acbxQiiYCRUdrE3JuQPDy61NBVOEfd87niqFaDJUOkOpVTi+EEokVDYIVzE6Drf+tZnGYFoz3tvEbU1SUBswYSEgEk2sfQDUj1qeMsMgHVjnsD7t+nrWm2ZWPLhGd9+qU1tNG1mIai1km4ZiOTioZb2VjyJPyyWy/Rwv1NbTiPE48OhkmbKo0+fgBWB4lGTDJbcIWX8y94f1ArYcb4UuPw8feyE5ZVNr6lQdR86yPbejiFXDO/IOBa7jlv+RVnYz2OGCQmwOfRcuIcRjZMNjomzLDiEJI+455UgI9HB+VehrXmsnARBw7EQKxYmKVsx072UsLDoAQK9A4RiOZBFJ9+JH/mUH96j2BKx0D42G4a426HMfW6lrWtEpwabuKuUUUU9VVFFFFCEUUUUISntXf2LFW39mmt/I1IeEyKuGhJICjDxak2HuLWrx8IeN0Pxoy/UEfvXm8FpeG4USaoDhxKPwp3Gv5ArrWc7Rxd5FFfTFY+I/Ct0YBkwlaXnK8ZZGDAqxBB02NZfgMg9mgH/Rj/AMoq/wBmjEJJEhFo2WOTL90vmUj55b0s4ICIVQjWMvEfVHZf7AVa7HNbHJPEP8SL5G2fqbKLakeEgBOIDY3FX8NgkZizBgt72J0U+VcMBF3WbXbS1v3qtieJXBZnPey2VNyQ2jG+gYbaabU92hPTvm7gtu8C4XFBBK4YmnLQqpxvH+zScpI0kGW4z65STpbck7/6Ul452WnxSx4iUmZibCBbZUA66bk+BrSLHFDIMQVeW0QUqQuik6km+r9LCu2I4mwaNQyZmJbuoQuUMCAdtR4nxOlLWUxF7Wvy3JnjwFoa25330PJZ/gjyKuKgP2cixrlU/mXoTv8AtV7in/DhHkjVuazbsLqQNtL3uD0tTjtdgVYxTi6vbUrocuhsDbe536UlwXZaSV+diJGEQsU1Jc9co8vOvTTOv8I5fNTsmik/fecIGdrbwLZeap9kIZxMeUPszYvr3Bpob/fPh/5pnjkbEBeZCZISWuFsGjtcXuTcLcVq8DgwuSyhFvcLp16nxc+J2pFHPFFeLKiuGewZ9SCSbn1Otr1K2lwuDhr8lVfP+qc4tb74lUcJwsYcGURFSwCxhmz2HU7eFVMa2bc3PWnsckZibca3LdCx6f7+lJpIQNelaGgOVzrx4pJXNIkw7uCozYfuP+Rv7GtJwnELHg4HdgFGHiJJO3cWkHGJcuHltuUKr5lu6B9WFM+0Jjhiw6SqzRIyh7KW0RdL26Zgv0rK9s7TOp4jrdx8LD1yVvZMeJ5HRMJMbHNh5HiYOpjkFx+VqfdkP+Bwn/xof/rWsJFPEMHj54LCNs+SwsM3LC7ebG1ejcGg5eHhj+5EifyqB+1Luz0IjbLbTENddNPC6s1rQ2S3nqrtFFFaJU0UUUUIRRRRQhfLV5/hMILY3BkA5JpMo2HLnHMXbW1y4+VehVje00fIxcOJ2SYeyzHoG96Fj+rOl/xilu1oDNSuDdR8Q6tz8r+KkhfgeHLP8G4qYHXDPhRFd+VdGuL2vse9bW9/OriRBMXLG20wE6eoASUf5G/UaOI4aPDSTY6RgWyZUB0sQDoPEk2+VS+fEYeKWNkfExZZFysCC+XvIfAOpK/TwrPbLrW01WyduTHfC452uc756AFMq+ISx4mj+d9k5w6WUqDa/UgmkfFMIR3WsoNyjDa/gfI0ywPEUlQSLs3TqDsQR0YEEEdCDVnFSxiPvrzA2yaa+d+lbqWnj7zviPi4qjQ1L43YBn9Cs6gEkTL/AIi6gE31Gtvn4+dWOHFZXjYtYKCDf1H9hv6UrlgUtdM0bC/dGbQeHerY4bhqIftI7rkuWNgo0J0N7k3NQOIZky1/um1bOIm2bq656cV1mxEc86RIQwUa+HT/AEqzhrTSOSbohyIOnmfXpSzsrYvI4Ay65SB0pnwMjlkj4m/ua6jdibdIZjazRuTCW1wL7d76f2rzvGsJZiwJPeOVRqxJ6+XzrfYyYKHJ+GNjroPrWO4QGDXRIgPiJW/7X/rXbMkx2c/u2vf6q97OqwhZSPFANwepJ3NKXHToKY8RszaG/ib1UndY0Z3ICqLsfL/dh6kU1gaI2C6SVDzI8uS9YObiIIbaBufJ+WO2Ufqcp9DVjtFxjEJMIYsiZlUqzqWLsWsQvTS+t6s8GjEKNiMQRHJOV0Y2yKLiOP1AJJ/ExqjgsLiJ3TnWkgWUvFN7jjKdNBuraj0r5ztivZWVzpTYxsGEX3nUkcblPtmwCJmJw+fHlxPK6uY3CMY8NhGbO8+IQOwAW6oebIbDpZAPnXoorHdno+fjZZ948Mpw8Z6GVrNKR+UBE/mrYgU62RA6Kkbi1d8R6u/FlQnfjeSpooopkokUUUUIRRRRQhFUOM8OTEwyQSA5ZFKkjceBHmCAR5ir9QaELA4G0ymHFIrT4ZwsgI0LAdyRQfhde8PMkdKVHjBhkyrgliLMgIuoZwxygqFFm/atb2m4Q5ZcXhhfERAqUvYTRnUxk9D1QnY+RNKI44cZyMSpJ5TEhSLEP7pVxuHU9PEeFqxm0qJtJKXubeJ195+E55ZbidDoOoTSkqG2wvF/E/dc+IYUxSNiIlLoxviIl3uP8RAPjA95fiAuNQLs8JOjoHidWRhoRqCP9+O1ZxMRNGZsa9oYs9uUw1ex9422c6WtvperCQrKWkwrcmVtZYJAQrk9XUaq340363pnsrbJp2CKpN2DR2uHkenEeKgqaFzfjZ4/ZMuLhViDBUB5gUkDcEHeuZimlA5jHIACFOptoB3fXxpJzwjGLEl4A+lnPdv0Mco7lwbEXsfKr49r7oYxSgXCzLIEfIejA6H61pJKSKd3esfiaRu0VFtS9rcJFiOK00WWHDyaFVUMAzfFcbgb+WtRwy6wJ6X1P09aoTSgqFeRjlA7vdA+tjeqU3FWDfxEUWsSqlnP6tABU8cDrWaFWfJnclOOJF3UqqlmOXNroAOh138dKmfUAXA8Qu16QS4mVltFdB1Y6GqmHxyk5FL4mUbrC11H5nuEUepv5VMYmwN7yRwFuPuy6bJjGENTueNUVmYhVUEkk2AA6k9BSvBw+0Ms8ncgQ5oVfumRukjg7IPgU7+8egqxFw1pCHxRVyveSBPcUjYm+sj+BbujoOtJsZxKbFqcqM6Bis2Hyi4UXuGdv8bYgLtWT2ntw1LXQUps3Rz9Ndw68TYJnSUBJxOyUcX4m84lsgdFLJy3Uhb3sLtbMZWPuhdrgk00VGwkCQQlnnlbJArNezEXOv8Ay4xdifLzr5wmFTDRCfFNm5ekTNcuqt7qWB70pJsLC5rQ9mOEyZjjMSuWaRcqR3vyYb3CeGc6Fz46DQUqoaNtU8NA/aYc/wDIjQDlxPVW6yoa1vds09+/d024HwxcNAkCXIQasd2Y6sx82JJPrTEVNFbBKUUUUUIRRRRQhFFFFCEUUUUIUEVluOcAkEjYrB5RMR9rExsk4G2b7sg6P8jcbaqoIriSNsjS14uDqCvQbG4WARoMZYSIRJCwZ4JLhkbbvLsV8CLg9DSnGcHmWUiPMM7iON1c/ZQaM2t9CToPDWt7xrs/DicrOGSVP4c0ZyyJ6MOnkbg+FZvHxY/DqyuntKWIWaEASLpu0R971Q/Ks1PsaaA4qU4m/wBp3b8tx9jNMKeuczJ310RxHiQilSKQLymikZy2vuW3GxBB60kU4HVgs2FOQSnlsUGUtlUlAStydhlvXZsXFiXRWEc7Iw7uqOp+K8Rs1rkaEdPOvji+GikZ3LSxszxLaSM2tHdhYDXKxG9LIBJSPDbvY7fYkZ34a6cRu55W2RQSgYhfn48s/wCF9iJLMRxCQZBdhJFHcDxN0Bt51YThl3Eftz3K57JFEDl8b5DYVACNO0+ImiPLjaPIqm1i2Vs19TqLWrhg8KkEWJRZ4xIwazd45IrDIL/hD6AeIq0dr12G3fP3bgddc8N8tVAaKDW3v8LrwzA4HEZvtJMSUNmEshIH6BlW3yr5n4nOHlw+GjRDE1ljEZIYGxuSLKi7+dfGC4dHE0TxPiHKRrqmUh4yQuXppc38RrX3j+LRxymSyQyvGFuxJkuCbDlLdmGnh1FVXvlnnNy6XLLFfI9OeegupxHDCSWjLdfcctVzxXCZZ8W7AmLKsWWUXuDY3C62I8b0xvFg++5MuImAGVF78zD7sYNvVtvE0cMh4hOtlXkISTzsQvfAJ2SG+nkZCPStPwXs7DhizjNJMws80hzO3lfYL+FQB5Uyptjzy2FQQ1osMI1IHE7hf+FVnriRgachl5fa6XcE4DI0i4nGhTIusMIN0gv1v8cx2LbDZbddWBQKmtLFG2NgYwWA0AS4m5uUUUUVIvEUUUUIRRRRQhFFFFCEUUUUIRRRRQhFQRRRQhL+K8Fw+JFp4Y5bbZ1BI9DuPlSd+xUQ0hnxUI+6k5Zf5ZQ4qKK5c0PFnC45i/mvQq7djp+mOYj8eFgY/wCUVKdkZ9jjmA0uEw0K7bbqfAUUVX/Swa923/Vv2XXeP4n5runYqI/xp8VMPBpii/yxBBTjhnBMNhhaCCOPzVQCfVtz8zRRVkMDMmi3TJcFMbUCiihCmiiivUIooooQiiiihCKKKKEL/9k=',
      institution: 'Gayatri Vidya Parishad College of Engineering',
      course: 'Btech in Computer Science and Engineering',
      score: 'CGPA: 9.34',
      period: '2021 - 2025 May',
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2ebs5pdx8w2lRHp68sbaByhBdvKcPbTiPE5vgeNlR7OWzmVZ6_IEN_Ze8eRLullCJpc&usqp=CAU",
      institution: 'Tirumala Junior College',
      course: 'Intermediate in the course M.P.C',
      score: 'Percentage: 98.2',
      period: 'May 2021',
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapxPJgjFCa3Oim9tyjirikX9QsSsXbK9D-A&s",
      institution: 'Sri Chaitanya EM High School',
      course: 'Intermediate in the course M.P.C',
      score: 'Grade: 10/10',
      period: 'May 2019',
    },
  ];

  const projects = [
    {
      title: "Hybrid Model for Enhanced Rear-End Collision Detection in Intelligent Transportation Systems under Varied Environmental Conditions",
      description: "Developed a hybrid model using DRNN and BI-LSTM for real-time rear-end collision detection in vehicles, achieving high accuracy under diverse conditions.",
      technologies: ["Python", "PTV Vissim", "Machine Learning"],
      link: "https://github.com/ajr2004/Rear-End-Collision-Detection-in-Fog-Based-Internet-of-Vehicles"
    },
    {
      title: "College Predictor System",
      description: "A Flask-based college admission prediction system using machine learning.",
      technologies: ["Flask", "Machine Learning", "RapidMiner"],
      link: "https://github.com/ajr2004/College_predictor"
    },
    {
      title: "W3Schools website (Clone)",
      description: "Using HTML, CSS, and JavaScript, created a W3Schools clone website that showcases expertise in front-end web development.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://industry-ready-2125.github.io/module-3-hosting-ajr2004/"
    },
  ];
  const experience = [
    {
      role: "Full Stack Developer Intern",
      company: "Flexternship By Ltimindtree under Trumio",
      link: "https://github.com/ajr2004/smartlend",
      period: "July - August 2025",
      description: "Completed a Flexternship with LTIMindtree (via Trumio), where I worked on developing a full-stack Loan Management System using React, Spring Boot, REST APIs, and MySQL. Implemented key features such as secure authentication, role-based dashboards, EMI scheduler, CIBIL score generator, and integrated chat/email notifications."
    },
    {
      role: "Front end developer",
      company: "Keshavsof",
      link: "",
      period: "May-June 2024",
      description: "During my internship in Keshavsoft. I worked for developing the website for Ultrawashtex,I was responsible for creating static web pages aligned with specified layout designs, contributing to the development of the company’s website"
    },

  ];
 

  

  const skills = {
    languages: [
      { name: "C++", logo: "https://cdn.worldvectorlogo.com/logos/c-1.svg" },
      { name: "C", logo: "https://cdn.worldvectorlogo.com/logos/c.svg" },
      { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-horizontal.svg" },
      { name: "HTML5", logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" },
      { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "JavaScript", logo: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" },
      { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg" }
    ],
    frameworks: [
      { name: "Node.js", logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" },
      { name: "Bootstrap", logo: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" },
      { name: "React", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" },
      { name: "OpenCV", logo: "https://www.vectorlogo.zone/logos/opencv/opencv-ar21.svg" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" }
    ],
    tools: [
      { name: "VS Code", logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
      { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" },
      { name: "Office 365", logo: "https://cdn.worldvectorlogo.com/logos/office-365-1.svg" },
      { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-ar21.svg" },
      { name: "Jupyter", logo: "https://www.vectorlogo.zone/logos/jupyter/jupyter-ar21.svg" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Athikamsetti Janaki Ram</h1>
        <div className="text-2xl text-green-400 mb-4">
          I'm <span className="inline-block min-w-[200px] text-left">{displayText}</span>
          <span className="animate-pulse">|</span>
        </div>
        <div className="flex justify-center gap-4">
          <a href="mailto:ajanakiram2004@gmail.com" className="hover:text-green-400">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/ajr2004" className="hover:text-green-400">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/athikamsetti-janaki-ram-157aa0251" className="hover:text-green-400">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <nav className="mt-8">
          <ul className="flex justify-center gap-6">
            <li><a href="#about" className="hover:text-green-400">About</a></li>
            <li><a href="#education" className="hover:text-green-400">Education</a></li>
            <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
            <li><a href="#experience" className="hover:text-green-400">Experience</a></li>
            <li><a href="#skills" className="hover:text-green-400">Skills</a></li>
            <li><a href="https://drive.google.com/file/d/1ZlR09_y3SplYNoarJwlNoAWWSoBcZte4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Resume</a></li>
            <li><a href="#contacts" className="hover:text-green-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
             <img src={profileImage} alt="Profile" className="rounded-lg" />
            </div>
            <div>
              <p className="text-lg italic mb-2">
                Welcome to my website! I'm A. Janaki Ram, a passionate and dedicated professional in the field of technology.
                With expertise in programming and software development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Birthday:</strong> 27th March 2004</p>
                  <p><strong>Phone:</strong> +91 7780172521</p>
                </div>
                <div>
                  <p><strong>City:</strong> Yelamanchili, Anakapalli district</p>
                  <p><strong>Email:</strong> ajanakiram2004@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* education */}
    <section id="education" className="bg-gray-800 py-8 min-h-screen">
    <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8">Education</h2>
    <div className="flex flex-col md:flex-row gap-6">
      

      {educationData.map((edu, index) => (
        <EducationCard
          key={index}
          logo={edu.logo}
          institution={edu.institution}
          course={edu.course}
          score={edu.score}
          period={edu.period}
        />
      ))}
    </div>
    </div>
    
     
    </section>
  

      {/* Skills */}
      <section id="skills" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Languages and Databases</h3>
              <div className="flex flex-wrap gap-4">
                {skills.languages.map((skill, index) => (
                  <img key={index} src={skill.logo} alt={skill.name} className="h-12" />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Frameworks</h3>
              <div className="flex flex-wrap gap-4">
                {skills.frameworks.map((skill, index) => (
                  <img key={index} src={skill.logo} alt={skill.name} className="h-12" />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Tools</h3>
              <div className="flex flex-wrap gap-4">
                {skills.tools.map((skill, index) => (
                  <img key={index} src={skill.logo} alt={skill.name} className="h-12" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={project.link} className="text-green-400 hover:text-green-300">{project.title}</a>
                </h3>
                <p className="text-lg mb-2">{project.description}</p>
                <p className="text-gray-400 mb-4">{project.technologies.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Experience */}
      <section id="experience" className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={exp.link} className="text-green-400 hover:text-green-300">{exp.company}</a>
                </h3>
                <p className="text-lg mb-2">{exp.role}</p>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                {exp.description && <p className="mb-4">{exp.description}</p>}
                {exp.projects && (
                  <ul className="list-disc list-inside">
                    {exp.projects.map((project, pIndex) => (
                      <li key={pIndex}>{project}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <a href="" className='hover:text-green-400'>
              <p>Yelamanchili, Anakapalli district</p>
              <p>Andhra Pradesh, India</p></a>
              
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:ajanakiram2004@gmail.com" className="hover:text-green-400">
                ajanakiram2004@gmail.com
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
