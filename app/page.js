import BrowseCategoriesSection from "./components/BrowseCategoriesSection/BrowseCategoriesSection";
import DiscoverMoreNFTsSection from "./components/DiscoverMoreNFTsSection/DiscoverMoreNFTsSection";
import HeroSection from "./components/HeroSection/HeroSection";
import HowtoWorksSection from "./components/HowtoWorksSection/HowtoWorksSection";
import NFTHighlightSection from "./components/NFTHighlightSection/NFTHighlightSection";
import SubscribeWidgetSection from "./components/SubscribeWidgetSection/SubscribeWidgetSection";
import TopRatedArtistsSection from "./components/TopRatedArtistsSection/TopRatedArtistsSection";
import TrendingCollectionSection from "./components/TrendingCollectionSection/TrendingCollectionSection";

export default function Home() {
  return (
    <div>
      {/*Hero Section*/}
      <section>
        <HeroSection />
      </section>
      {/*Trending Collection Section*/}
      <section>
        <TrendingCollectionSection />
      </section>
      {/*Top Rated Artists Section*/}
      <section>
        <TopRatedArtistsSection />
      </section>
      {/*Browse Categories Section*/}
      <section>
        <BrowseCategoriesSection />
      </section>
      {/*Discover More NFTs Section*/}
      <section>
        <DiscoverMoreNFTsSection />
      </section>
      {/*NFT Highlight Section*/}
      <section>
        <NFTHighlightSection />
      </section>
      {/*How to Works Section*/}
      <section>
        <HowtoWorksSection />
      </section>
      {/*Subscribe Widget Section*/}
      <section>
        <SubscribeWidgetSection />
      </section>
    </div>
  );
}
