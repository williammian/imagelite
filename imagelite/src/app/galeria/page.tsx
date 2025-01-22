import { Template, ImageCard } from '@/components'

export default function GaleriaPage() {
    return(
        <Template>
            <section className="grid grid-cols-4 gap-8">
                <ImageCard nome='Lago' tamanho='10MB' dataUpload='01/01/2025' src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'/>
                <ImageCard nome='Lago' tamanho='10MB' dataUpload='01/01/2025' src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'/>
                <ImageCard nome='Lago' tamanho='10MB' dataUpload='01/01/2025' src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'/>
                <ImageCard nome='Lago' tamanho='10MB' dataUpload='01/01/2025' src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'/>
                <ImageCard nome='Lago' tamanho='10MB' dataUpload='01/01/2025' src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'/>
                <ImageCard nome='Lago' tamanho='10MB' dataUpload='01/01/2025' src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'/>
                <ImageCard nome='Lago' tamanho='10MB' dataUpload='01/01/2025' src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'/>
            </section>
        </Template>
    )
}