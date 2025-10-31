import { json, LoaderFunction, MetaFunction, useLoaderData, LinksFunction, Link } from 'remix';
import { sql_query } from '~/lib/db';
import photoStylesUrl from '~/styles/photograph.css';

type User = {
    caption: string;
}

var id:string = '';
var photourl:string = '';
var arr:any = [];
var finalsavetext:string = 'Save';

const replaceHash = (string) => {
    return string.replace(/#/g, '');
}

export let loader: LoaderFunction = async ({ request, params }) => {

    id = params.id;

    const post = await sql_query(`SELECT g_photos.id as globalId, g_photos.caption as altText, g_photos.photo as originalPhoto, g_photos.photo_links as otherPhoto, g_photos.small as smallPhoto, g_photos.tags as hashtags, g_photos.link as source, g_photos.g_id as galleryId, galleries.g_name as gallery, galleries.g_theme as theme, galleries.g_description as description FROM g_photos, galleries WHERE g_photos.id=${params.id} AND galleries.id=g_photos.g_id LIMIT 1`)

    if (!post) {
        throw new Response('Not Found', {
            status: 404
        })
    }

    if(post[0].hashtags){
        var arr = post[0].hashtags.split(' ');
    }

    photourl = post[0].originalPhoto ? 'https://fagacy.com/posts/gallery/'+post[0].originalPhoto : (post[0].otherPhoto ? post[0].otherPhoto : post[0].smallPhoto);

    return post
}

export const links: LinksFunction = () => {
    
    return [
        {
          rel: "alternate",
          href: 'https://fagacy.com/photograph/'+id+'/',
          hrefLang: "x-default"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=af",
            hrefLang: "af"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=sq",
            hrefLang: "sq"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=am",
            hrefLang: "am"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=hy",
            hrefLang: "hy"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=az",
            hrefLang: "az"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=eu",
            hrefLang: "eu"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=be",
            hrefLang: "be"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=bn",
            hrefLang: "bn"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=bs",
            hrefLang: "bs"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=bg",
            hrefLang: "bg"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ca",
            hrefLang: "ca"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ceb",
            hrefLang: "ceb"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ny",
            hrefLang: "ny"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=zh-CN",
            hrefLang: "zh-CN"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=zh-TW",
            hrefLang: "zh-TW"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=co",
            hrefLang: "co"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=hr",
            hrefLang: "hr"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=cs",
            hrefLang: "cs"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=da",
            hrefLang: "da"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=nl",
            hrefLang: "nl"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=eo",
            hrefLang: "eo"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=et",
            hrefLang: "et"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=tl",
            hrefLang: "tl"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=fi",
            hrefLang: "fi"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=fr",
            hrefLang: "fr"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=fy",
            hrefLang: "fy"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=gl",
            hrefLang: "gl"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ka",
            hrefLang: "ka"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=de",
            hrefLang: "de"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=el",
            hrefLang: "el"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=en",
            hrefLang: "en"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=en-US",
            hrefLang: "en-US"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=en-LK",
            hrefLang: "en-LK"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=gu",
            hrefLang: "gu"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ht",
            hrefLang: "ht"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ha",
            hrefLang: "ha"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=haw",
            hrefLang: "haw"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=iw",
            hrefLang: "iw"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=hi",
            hrefLang: "hi"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=hmn",
            hrefLang: "hmn"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=hu",
            hrefLang: "hu"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=is",
            hrefLang: "is"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ig",
            hrefLang: "ig"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=id",
            hrefLang: "id"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ga",
            hrefLang: "ga"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=it",
            hrefLang: "it"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ja",
            hrefLang: "ja"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=jw",
            hrefLang: "jw"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=kn",
            hrefLang: "kn"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=kk",
            hrefLang: "kk"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=km",
            hrefLang: "km"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=rw",
            hrefLang: "rw"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ko",
            hrefLang: "ko"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ku",
            hrefLang: "ku"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ky",
            hrefLang: "ky"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=lo",
            hrefLang: "lo"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=la",
            hrefLang: "la"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=lv",
            hrefLang: "lv"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=lt",
            hrefLang: "lt"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=lb",
            hrefLang: "lb"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=mk",
            hrefLang: "mk"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=mg",
            hrefLang: "mg"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ms",
            hrefLang: "ms"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ml",
            hrefLang: "ml"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=mt",
            hrefLang: "mt"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=mi",
            hrefLang: "mi"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=mr",
            hrefLang: "mr"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=mn",
            hrefLang: "mn"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=my",
            hrefLang: "my"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ne",
            hrefLang: "ne"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=no",
            hrefLang: "no"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=or",
            hrefLang: "or"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ps",
            hrefLang: "ps"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=fa",
            hrefLang: "fa"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=pl",
            hrefLang: "pl"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=pt",
            hrefLang: "pt"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=pa",
            hrefLang: "pa"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ro",
            hrefLang: "ro"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ru",
            hrefLang: "ru"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=sm",
            hrefLang: "sm"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=gd",
            hrefLang: "gd"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=sr",
            hrefLang: "sr"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=st",
            hrefLang: "st"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=sn",
            hrefLang: "sn"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=sd",
            hrefLang: "sd"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=si",
            hrefLang: "si"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=sk",
            hrefLang: "sk"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=sl",
            hrefLang: "sl"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=so",
            hrefLang: "so"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=es",
            hrefLang: "es"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=su",
            hrefLang: "su"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=sw",
            hrefLang: "sw"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=sv",
            hrefLang: "sv"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=tg",
            hrefLang: "tg"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ta",
            hrefLang: "ta"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=tt",
            hrefLang: "tt"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=te",
            hrefLang: "te"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=th",
            hrefLang: "th"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=tr",
            hrefLang: "tr"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=tk",
            hrefLang: "tk"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=uk",
            hrefLang: "uk"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ur",
            hrefLang: "ur"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=ug",
            hrefLang: "ug"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=uz",
            hrefLang: "uz"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=vi",
            hrefLang: "vi"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=cy",
            hrefLang: "cy"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=xh",
            hrefLang: "xh"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=yi",
            hrefLang: "yi"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=yo",
            hrefLang: "yo"
        },
        {
            rel: "alternate",
            href: "https://fagacy.com/photograph/"+id+"/?hl=zu",
            hrefLang: "zu"
        },
        {
            rel: "preload",
            as: "image",
            href: photourl,
        },
        {rel:'stylesheet', href:photoStylesUrl}
      ];
}

export const meta: MetaFunction = ({ data }: { data: User }) => {
    
    return {
        title: `${data[0].altText && data[0].hashtags ? data[0].altText + ' ' + data[0].hashtags+' - Fagacy' : (data[0].altText ? data[0].altText+' - Fagacy': (data[0].hashtags ? data[0].hashtags+' - Fagacy': 'Fagacy'))}`,
        description: `${data[0].altText && data[0].hashtags ? data[0].altText + ' ' + data[0].hashtags : (data[0].altText ? data[0].altText: (data[0].hashtags ? data[0].hashtags: 'Discover new photos on Fagacy'))}`,
        keywords: data[0].hashtags ? data[0].hashtags : 'photo, photograph, fagacy',
        'twitter:card': 'summary_large_image',
        'og:title': `${data[0].altText && data[0].hashtags ? data[0].altText + ' ' + data[0].hashtags+' - Fagacy' : (data[0].altText ? data[0].altText+' - Fagacy': (data[0].hashtags ? data[0].hashtags+' - Fagacy': 'Fagacy'))}`,
        'og:description': `${data[0].altText && data[0].hashtags ? data[0].altText + ' ' + data[0].hashtags : (data[0].altText ? data[0].altText: (data[0].hashtags ? data[0].hashtags: 'Discover new photos on Fagacy'))}`,
        'og:image': data[0].originalPhoto ? 'https://fagacy.com/posts/gallery/'+data[0].originalPhoto : (data[0].otherPhoto ? data[0].otherPhoto : data[0].smallPhoto),
        'twitter:title': `${data[0].altText && data[0].hashtags ? data[0].altText + ' ' + data[0].hashtags+' - Fagacy' : (data[0].altText ? data[0].altText+' - Fagacy': (data[0].hashtags ? data[0].hashtags+' - Fagacy': 'Fagacy'))}`,
        'twitter:description': `${data[0].altText && data[0].hashtags ? data[0].altText + ' ' + data[0].hashtags : (data[0].altText ? data[0].altText: (data[0].hashtags ? data[0].hashtags: 'Discover new photos on Fagacy'))}`,
        'twitter:image': data[0].originalPhoto ? 'https://fagacy.com/posts/gallery/'+data[0].originalPhoto : (data[0].otherPhoto ? data[0].otherPhoto : data[0].smallPhoto),
        'twitter:image:alt': `${data[0].altText && data[0].hashtags ? data[0].altText + ' ' + data[0].hashtags : (data[0].altText ? data[0].altText: (data[0].hashtags ? data[0].hashtags: 'Discover new photos on Fagacy'))}`
    }
}


function Photograph(){

    const post = useLoaderData()

    return (
        <div>
            <br />
            <div className={'z2'}></div>
            <div id="imageshow" className={`imageshow`}>
                <div className={`secondtopdiv fiximg`}>
                    <img 
                    src={post[0].originalPhoto ? '/posts/gallery/'+post[0].originalPhoto : (post[0].otherPhoto ? post[0].otherPhoto : post[0].smallPhoto)}
                    className={`border20`}
                    alt={post[0].altText} />
                    <a className={`reflink`} target="_blank" rel="noreferrer" href={post[0].source}>
                        <div id="refto" className={`referencelink1`}>
                            <span></span>
                        </div>
                    </a>
                </div>
                <div className={`hideshr`}></div>
                <div className={`mainofshare`}>
                    <div id="sharepacked">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`sharesvg`} viewBox="0 0 512 512">
                            <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z">
                            </path>
                        </svg>
                    </div>
                </div>
                <br />
                <div style={{textAlign:'center'}}>
                    <span className={`pcaption`} dir="auto">
                        {post[0].altText ? post[0].altText : ''}
                    </span>
                </div>
                <div style={{textAlign:'center'}}>
                <div className={`breakword`}>
                    {arr && (
                        <>
                        {arr.length>0 && arr.map(book => <Link to={`/tags/${replaceHash(book)}/`} key={book}><a className={`eachtag removeunderline`}>{book}</a></Link>)}
                        </>
                    )}
                    </div>
                </div>
            </div>
            <div id="iamtheone" className={`iamtheone`}>
                <div className={`downd`}>
                    <div className={`inthemiddle`}></div>
                    <div className={`padbot10`}>
                        <>
                            <Link to='/signin/'>
                                <button id="savebtn" dir="auto" className={`savebtn`}>{finalsavetext}</button>
                            </Link>
                        </>
                    </div>
                    <br />
                    <br />
                    <div id="snackbar"></div>
                    <div id="snackbar2"></div>
                </div>
            </div>
            <Link to={`/gallery/${post[0].galleryId}/`} style={{color:"#1b1a1a"}}>
                <span dir="auto" id="gnspan">{post[0].gallery}</span>
            </Link>
            <br />
            <span style={{paddingLeft:"5px", fontSize:"25px", fontWeight:"500"}}>{post[0].theme}</span>
            <br />
            <div style={{paddingLeft:"8px"}}>
                <span style={{fontSize:"22px", fontWeight:"400", color:"black", wordWrap:"break-word"}}>{post[0].description}</span>
            </div>
            <div className={`udme`}></div>
            <div className={`allphotosofgcontainer`} id="allphotosofgcontainer">

            </div>
        </div>
    );
}

export default Photograph;