import { render } from "@testing-library/react";

import { FOOTER_LINKS } from "@/config/links";
import Footer from "@/ui/Footer";

describe("@/components/Layout/Footer", () => {
  it("Should display the links configured in @/config/links", () => {
    const { container: footer } = render(<Footer />);
    const footerLinkText = FOOTER_LINKS.map((list) =>
      list.links.map((link) => link.title)
    ).flat();

    const renderFooterText: string[] = [];

    footer.querySelectorAll("footer a").forEach((link) => {
      renderFooterText.push(link.textContent);
    });

    expect(renderFooterText).toEqual(footerLinkText);
  });
});
